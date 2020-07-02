import express, { Request, Response } from "express";
import Shoes from "../schemas/shoes";

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

export default router;
