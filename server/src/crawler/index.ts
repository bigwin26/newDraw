import cron from "node-cron";
import nike from "./nike";
import addcron from "./addcron";

export default () => {
  //매일 아침 6시마다 상품리스트 업데이트
  cron.schedule("* 6 * * *", () => {
    nike();
  });
  //매일 아침 6시반 발매 푸시알림 등록
  cron.schedule("30 6 * * *", () => {
    addcron();
  });
};
