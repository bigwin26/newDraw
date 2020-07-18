import express, { Application } from "express";
import connect from "./schemas";
import crawler from "./crawler";
import apiRouter from "./router";
import * as dotenv from "dotenv";

const app: Application = express();
const port: number = 8080;
dotenv.config();

//mongoDB연결
connect();
//crawler실행
crawler();
//라우터
//app.use("/api", apiRouter);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
