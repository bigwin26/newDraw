import fs from "fs";
import request from "request";

export default async function downloadImg(
  code: string,
  src: string,
  index: number,
) {
  const writeStream = fs.createWriteStream(`./src/images/${code}-${index}.png`);
  console.log("imgDownload: ", src);
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
