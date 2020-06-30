import express, { Application, Request, Response } from "express";
import connect from "../schemas";

const app: Application = express();
const port: number = 3000;

connect();

app.get("/", (req: Request, res: Response) => {
  res.send("HomePage");
});

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
