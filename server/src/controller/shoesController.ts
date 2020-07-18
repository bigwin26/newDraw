import { Request, Response } from "express";
import Shoes from "../schemas/shoes";
import paging from "../common/paging";

const pagingController = async (req: Request, res: Response) => {
  const { page } = req.params;
  try {
    const totalPost = await Shoes.countDocuments({});
    if (!totalPost) {
      throw Error();
    }
    let {
      startPage,
      endPage,
      hidePost,
      maxPost,
      totalPage,
      currentPage,
    } = paging(Number(page), totalPost);
    const shoes = await Shoes.find({})
      .sort({ createAt: -1 })
      .skip(hidePost)
      .limit(maxPost);
    return {
      shoes,
      currentPage,
      startPage,
      endPage,
      maxPost,
      totalPage,
    };
  } catch (error) {
    return { shoes: [] };
  }
};

export default pagingController;
