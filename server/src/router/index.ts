import express, { Request, Response } from "express";
import Shoes from "../schemas/shoes";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const shoes = new Shoes({
    title: "test",
  });
  try {
    await shoes.save();
    res.send("요청됫다");
  } catch (error) {
    res.send("error낫다");
  }
});

export default router;
