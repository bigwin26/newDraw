import express, { Application } from "express";
import connect from "./schemas";
import crawler from "./crawler";
import apiRouter from "./router";
import * as dotenv from "dotenv";
import cors from "cors";

const app: Application = express();
const port: number = 8080;
dotenv.config();

//mongoDB연결
connect();
//crawler실행
crawler();
//cors
const corsOptions = {
  origin: "http://localhost:3000", // 허락하고자 하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
app.use(cors(corsOptions));

//라우터
app.use("/api", apiRouter);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
