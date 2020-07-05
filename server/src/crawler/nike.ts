import Shoes from "../schemas/shoes";
import webdriver, { By } from "selenium-webdriver";

//크롤링한 주소에서 상품 code값 추출
function getStyleCode(value: string) {
  const n = value.split("/");
  //해당 상품이 신발일 경우에만 code값 리턴, 아닐경우 null값 리턴
  return n[n.length - 5] === "fw" ? n[n.length - 3] : null;
}

//발매예정 상품리스트 크롤링
export default async function crawl() {
  //var driver = new webdriver.Builder().forBrowser("chrome").build();
  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

  //webdriver URL 호출
  driver.get("https://www.nike.com/kr/launch/?type=upcoming");

  //리스트값 저장할 배열 선언
  const items: any[] = [];

  const el = await driver.findElements(
    By.className("launch-list-item  upcomingItem"),
  );
  for (let index = 0; index < el.length; index++) {
    const element = el[index];
    const item = {
      title: "",
      code: "",
      release_date: "",
      location: "",
    };
    const href = await element
      .findElement(By.tagName("a"))
      .getAttribute("href");
    const code = getStyleCode(href);
    if (code !== null) {
      const title = await element
        .findElement(By.className("txt-description"))
        .getText();
      const release_date = await element.getAttribute("data-active-date");
      item.title = title;
      item.release_date = release_date;
      item.code = code;
      item.location = href;
      //배열에 크롤링값 저장
      items.push(item);
    }
  }
  // DB에 값 저장
  items.forEach(async ({ title, code, location, release_date }) => {
    try {
      await new Shoes({
        title,
        code,
        location,
        release_date,
        method: "FCFS",
        status: "upcoming",
      }).save();
    } catch (error) {
      console.error(error);
    }
  });
  // DB에 값 저장 후 driver 연결종료.
  await driver.quit();

  //발매예정 상품디테일정보 크롤링
  await Shoes.find({ status: "upcoming" }, (err, docs) => {
    //docs.forEach(({ code, location }) => {
    for (let index = 0; index < docs.length; index++) {
      setTimeout(async () => {
        const { code, location } = docs[index];

        var driver = new webdriver.Builder()
          .withCapabilities(webdriver.Capabilities.chrome())
          .build();

        //webdriver URL 호출
        await driver.get(location);
        const color = await driver
          .findElement(By.className("txt-title"))
          .getText();
        const price = await driver.findElement(By.className("price")).getText();
        const description = await driver
          .findElement(By.className("p1_tail"))
          .getText();
        try {
          await Shoes.updateMany({ code }, { color, price, description });
        } catch (error) {
          console.error(error);
        } finally {
          await driver.quit();
        }
      }, 10000 * index);
    }
  });
}
