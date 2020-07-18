import { Request, Response } from "express";
import fs from "fs";
import Shoes from "../schemas/shoes";
import paging from "../common/paging";

export const shoesList = async (req: Request, res: Response) => {
  const { page } = req.query;
  try {
    const total = await Shoes.countDocuments({});
    if (!total) {
      throw Error();
    }
    let { maxPost, skipPage, totalPage, currentPage } = paging(
      Number(page),
      total,
    );
    const shoes = await Shoes.find({})
      .sort({ release_date: -1 })
      .skip(skipPage)
      .limit(maxPost);
    res.status(200).send({ shoes, totalPage, currentPage });
  } catch (error) {
    res.status(204).send({ shoes: [] });
  }
};

export const shoesDetail = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const shoes = await Shoes.findOne({ code });
    console.log("detail", shoes);
    if (shoes === null) {
      res.status(204).send({ message: "데이터가 존재하지 않습니다." });
    } else {
      res.status(200).send(shoes);
    }
  } catch (error) {
    res.status(500).send("다시 시도 해주세요.");
  }
};

export const shoesImages = (req: Request, res: Response) => {
  const { code } = req.params;
  fs.readFile(`./src/images/${code}`, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.writeHead(200, { "Content-type": "image/png" });
      res.write(data);
      res.send();
    }
  });
};
