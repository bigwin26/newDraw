import Shoes from "../../schemas/shoes";
import fcm from "./fcm";
import cron from "node-schedule";

async function addcron() {
  const list = await Shoes.find({ status: "upcoming" })
    .sort({ release_date: 1 })
    .exec();
  /* const list = [
    {
      title: "조던1",
      location: "localhost:3000",
      release_date: "2020-07-09 17:18:00",
    },
    {
      title: "조던1",
      location: "localhost:3000",
      release_date: "2020-07-09 17:18:10",
    },
    {
      title: "조던2",
      location: "localhost:3000",
      release_date: "2020-07-10 17:18:10",
    },
    {
      title: "조던3",
      location: "localhost:3000",
      release_date: "2020-07-11 17:18:20",
    },
  ]; */
  list.forEach((element) => {
    const time = getTime(element.release_date);
    const code = element.code;
    if (time[0] <= 0) {
      cron.scheduleJob(time[1], () => {
        //5분전 발매 알림 fcm메시지 등록
        fcm(element.title, element.location);
      });
      cron.scheduleJob(element.release_date, async () => {
        //발매알림
        fcm(element.title, element.location);
        try {
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
  const fiveMleft = releaseDay - 300000;

  return [diffDays, fiveMleft];
}

export default addcron;
