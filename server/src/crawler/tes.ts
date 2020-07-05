import Shoes from "../schemas/shoes";
import webdriver, { By } from "selenium-webdriver";
import connect from "../schemas";
connect();
Shoes.find({ status: "upcoming" }, (err, docs) => {
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
  //});
});
