import express, { Application } from "express";
import connect from "./schemas";

import shoesRouter from "./router";

const app: Application = express();
const port: number = 3000;
connect();

app.use("/shoes", shoesRouter);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
