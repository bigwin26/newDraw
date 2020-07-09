import express, { Request, Response } from "express";
import Shoes from "../schemas/shoes";
import fs from "fs";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const shoes = new Shoes({
    title: "test1",
    code: "ddp",
    release_date: "20200702",
    method: "drop",
    status: "upcoming",
  });
  try {
    await shoes.save();
    res.send("요청됫다");
  } catch (error) {
    console.log(error);
    res.send("error낫다");
  }
});

router.get("/image/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id", typeof id);
  fs.readFile(`./src/images/${id}`, (err, data) => {
    console.log(data, err);
    res.writeHead(200, { "Content-type": "image/png" });
    res.write(data);
    res.send();
  });
});

export default router;
