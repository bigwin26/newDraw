import { Request, Response } from "express";
import fs from "fs";

const ImageController = (req: Request, res: Response) => {
  const { id } = req.params;
  fs.readFile(`./src/images/${id}`, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.writeHead(200, { "Content-type": "image/png" });
      res.write(data);
      res.send();
    }
  });
};

export default ImageController;
