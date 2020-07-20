import Shoes from "../schemas/shoes";
import fcm from "../controller/fcmController";
import { getDiffDays, getleftTime } from "../common/dateFunc";
import cron from "node-schedule";

async function addcron() {
  const list = await Shoes.find({ status: "upcoming" })
    .sort({ release_date: 1 })
    .exec();
  list.forEach((element) => {
    const time = getDiffDays(element.release_date);
    const fiveMinAgo = getleftTime(element.release_date, 5);
    const twoHoursAgo = getleftTime(element.release_date, 120);
    const code = element.code;
    let title;
    //당일 발매, 드로우 상품만 스케줄러에 등록
    if (time <= 0) {
      if (element.method === "DRAW") {
        //보통 나이키 드로우는 발매시간 2시간전에 응모시작.
        cron.scheduleJob(twoHoursAgo, async () => {
          //발매알림
          title = `${element.title}의 드로우가 시작됬습니다.`;
          fcm(element.title, element.location, title);
          try {
            //발매후 해당상품 상태변경 upcoming->released
            await Shoes.update({ code }, { status: "released" });
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        cron.scheduleJob(fiveMinAgo, () => {
          //5분전 발매 알림 fcm메시지 등록
          title = `잠시후 5분 뒤 ${element.title}이 발매됩니다.`;
          fcm(element.title, element.location, title);
        });
        cron.scheduleJob(element.release_date, async () => {
          //발매알림
          title = `${element.title}이 발매 되었습니다.`;
          fcm(element.title, element.location, title);
          try {
            //발매후 해당상품 상태변경 upcoming->released
            await Shoes.update({ code }, { status: "released" });
          } catch (error) {
            console.error(error);
          }
        });
      }
    }
  });
}

export default addcron;
