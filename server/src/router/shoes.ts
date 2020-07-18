import express, { Request, Response } from "express";
import fs from "fs";
import shoesController from "../controller/shoesController";
import imageController from "../controller/imageController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hi shoes");
});

router.get("/shoes/:id", shoesController);
router.get("/image/:id", imageController);

export default router;
