import fs from "fs";
import request from "request";

export default async function downloadImg(
  code: string,
  src: string,
  index: number,
) {
  var writeStream = fs.createWriteStream(`./src/images/${code}-${index}.png`);
  try {
    request(src)
      .on("error", (error: any) => {
        console.error(error);
      })
      .pipe(writeStream)
      .on("error", function (error: any) {
        console.error(error);
      });
  } catch (error) {
    console.error("error", error);
  }
}
