import Shoes from "../schemas/shoes";
import webdriver, { By } from "selenium-webdriver";
import downloadImg from "../common/imgdownload";
import path from "path";

//크롤링한 주소에서 상품 code값 추출
function getStyleCode(value: string) {
  const n = value.split("/");
  //해당 상품이 신발일 경우에만 code값 리턴, 아닐경우 null값 리턴
  return n[n.length - 5] === "fw" ? n[n.length - 3] : null;
}

//발매예정 상품리스트 크롤링
export default async function crawl() {
  const chrome = require("selenium-webdriver/chrome");
  const options = new chrome.Options();

  options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--no-sandbox");
  options.addArguments("--headless");

  //ubuntu server 드라이버 경로
  let service = new chrome.ServiceBuilder(
    path.join(__dirname, "../../chromedriver"),
  ).build();
  chrome.setDefaultService(service);

  //window 테스트
  /* const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build(); */

  const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

  //webdriver URL 호출
  driver.get("https://www.nike.com/kr/launch/?type=upcoming");

  //리스트값 저장할 배열 선언
  let items: any[] = [];

  //발매예정 리스트 가져오기
  const elements = await driver.findElements(
    By.className("launch-list-item  upcomingItem"),
  );

  //발매리스트 갯수만큼 객체생성
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const item = {
      title: "",
      method: "",
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
      let method = await element
        .findElement(By.className("txt-subject"))
        .getText();
      method = method.slice(-5, -3) === "응모" ? "DRAW" : "FCFS";
      const release_date = await element.getAttribute("data-active-date");
      item.title = title;
      item.method = method;
      item.release_date = release_date;
      item.code = code;
      item.location = href;
      //배열에 크롤링값 저장
      //items.push(item);
      items = [...items, item];
    }
  }
  // 생성된 객체 DB에 값 저장
  items.forEach(async ({ title, method, code, location, release_date }) => {
    try {
      await new Shoes({
        title,
        code,
        color: null,
        price: null,
        location,
        release_date,
        method,
        status: "upcoming",
      }).save();
    } catch (error) {
      console.error(error);
    }
  });
  // DB에 값 저장 후 driver 연결종료.
  await driver.quit();

  //발매예정 상품디테일정보 크롤링
  await Shoes.find(
    { status: "upcoming", color: null, price: null },
    (err, docs) => {
      //docs.forEach(({ code, location }) => {
      for (let index = 0; index < docs.length; index++) {
        setTimeout(async () => {
          const { code, location } = docs[index];

          const driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

          //webdriver URL 호출
          await driver.get(location);
          const color = await driver
            .findElement(By.className("txt-title"))
            .getText();
          const price = await driver
            .findElement(By.className("price"))
            .getText();
          const description = await driver
            .findElement(By.className("p1_tail"))
            .getText();
          const images = await driver.findElements(
            By.className("uk-width-1-2 image-list"),
          );
          async function saveImg(images: any[]) {
            images.forEach(async (element, index) => {
              const imgsrc = await element
                .findElement(By.tagName("img"))
                .getAttribute("data-product-image");
              downloadImg(code, imgsrc, index);
            });
          }
          saveImg(images);
          try {
            await Shoes.updateMany({ code }, { color, price, description });
          } catch (error) {
            console.error(error);
          } finally {
            setTimeout(() => {
              driver.quit();
            }, 3000);
          }
        }, 20000 * index);
      }
    },
  );
}
