import cron from "node-cron";
import nike from "./nike";

export default () => {
  //매일 아침 6시마다 상품리스트 업데이트
  cron.schedule("* 6 * * *", () => {
    nike();
  });
};
