"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shoes_1 = __importDefault(require("../schemas/shoes"));
const schemas_1 = __importDefault(require("../schemas"));
var webdriver = require("selenium-webdriver");
var By = require("selenium-webdriver").By;
//var driver = new webdriver.Builder().forBrowser("chrome").build();
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
//webdriver URL 호출
var url = "https://www.nike.com/kr/launch/?type=upcoming";
driver.get(url);
schemas_1.default();
function crawl() {
    return __awaiter(this, void 0, void 0, function* () {
        const items = [];
        const el = yield driver.findElements(By.className("launch-list-item  upcomingItem"));
        for (let index = 0; index < el.length; index++) {
            const element = el[index];
            const item = { release_date: "" };
            const release_date = yield element.getAttribute("data-active-date");
            item.release_date = release_date;
            items.push(item);
            console.log(item);
            //.then((time) => console.log("time", time));
            //const v = element.findElement(By.tagName("a")).getAttribute("href");
            //v.getAttribute("href").then((h) => console.log("h", h));
        }
        console.log("items", items);
        items.forEach((ele, index) => __awaiter(this, void 0, void 0, function* () {
            console.log("start", ele, index);
            try {
                yield new shoes_1.default({
                    title: `test${index}`,
                    code: `ddp${index}`,
                    release_date: ele.release_date,
                    method: "drop",
                    status: "upcoming",
                }).save();
            }
            catch (error) {
                console.error(error);
            }
        }));
    });
}
crawl();
//# sourceMappingURL=nike.js.map