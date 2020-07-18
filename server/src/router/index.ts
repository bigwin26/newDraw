import express from "express";
import shoesRouter from "./shoes";
import authRouter from "./auth";
const router = express.Router();

router.use("/shoes", shoesRouter);
router.use("/auth", authRouter);

export default router;
