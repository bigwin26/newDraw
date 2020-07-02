import Shoes from "../schemas/shoes";
import connect from "../schemas";
var webdriver = require("selenium-webdriver");
var By = require("selenium-webdriver").By;
//var driver = new webdriver.Builder().forBrowser("chrome").build();
var driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

//webdriver URL 호출
var url = "https://www.nike.com/kr/launch/?type=upcoming";
driver.get(url);
connect();

async function crawl() {
  const items = [];
  const el = await driver.findElements(
    By.className("launch-list-item  upcomingItem"),
  );
  for (let index = 0; index < el.length; index++) {
    const element = el[index];
    const item = { release_date: "" };
    const release_date = await element.getAttribute("data-active-date");
    item.release_date = release_date;
    items.push(item);
    console.log(item);
    //.then((time) => console.log("time", time));
    //const v = element.findElement(By.tagName("a")).getAttribute("href");
    //v.getAttribute("href").then((h) => console.log("h", h));
  }
  console.log("items", items);
  items.forEach(async (ele, index) => {
    console.log("start", ele, index);
    try {
      await new Shoes({
        title: `test${index}`,
        code: `ddp${index}`,
        release_date: ele.release_date,
        method: "drop",
        status: "upcoming",
      }).save();
    } catch (error) {
      console.error(error);
    }
  });
}
crawl();
