import express, { Application } from "express";
import connect from "./schemas";
import crawler from "./crawler";
import shoesRouter from "./router/shoes";

const app: Application = express();
const port: number = 3000;

//mongoDB연결
connect();
//crawler실행
crawler();
//라우터
app.use("/shoes", shoesRouter);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
