import fs from "fs";
import request from "request";

export default async function downloadImg(
  code: string,
  src: string,
  index: number,
) {
  const writeStream = fs.createWriteStream(`./src/images/${code}-${index}.png`);
  try {
    request(src)
      .on("error1", (error: any) => {
        console.error(error);
      })
      .pipe(writeStream)
      .on("error2", (error: any) => {
        console.error(error);
      });
  } catch (error) {
    console.error("error3", error);
  }
}
