import express, { Request, Response } from "express";
import {
  shoesList,
  shoesDetail,
  shoesImages,
} from "../controller/shoesController";

const router = express.Router();

router.get("/", shoesList);
router.get("/:code", shoesDetail);
router.get("/:code/image", shoesImages);

export default router;
