import Shoes from "../schemas/shoes";
import fcm from "../controller/fcmController";
import cron from "node-schedule";

async function addcron() {
  const list = await Shoes.find({ status: "upcoming" })
    .sort({ release_date: 1 })
    .exec();
  list.forEach((element) => {
    const time = getTime(element.release_date);
    const code = element.code;
    let way;
    if (time[0] <= 0) {
      cron.scheduleJob(time[1], () => {
        //5분전 발매 알림 fcm메시지 등록
        way = "5min";
        fcm(element.title, element.location, way);
      });
      cron.scheduleJob(element.release_date, async () => {
        //발매알림
        way = "now";
        fcm(element.title, element.location, way);
        try {
          //발매후 해당상품 상태변경 upcoming->released
          await Shoes.update({ code }, { status: "released" });
        } catch (error) {
          console.error(error);
        }
      });
    }
  });
}

function getTime(release_date: string) {
  const releaseDay: any = new Date(release_date);
  const currDay: any = new Date();

  const diffDays = Math.floor(
    (releaseDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24),
  );

  ///1000ms = 1초, 60000 = 1분, 300000 = 5분
  const fiveMinLeft = releaseDay - 300000;

  return [diffDays, fiveMinLeft];
}

export default addcron;
