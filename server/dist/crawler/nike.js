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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const shoes_1 = __importDefault(require("../schemas/shoes"));
const schemas_1 = __importDefault(require("../schemas"));
const selenium_webdriver_1 = __importStar(require("selenium-webdriver"));
const node_cron_1 = __importDefault(require("node-cron"));
//DB연결
schemas_1.default();
//크롤링한 주소에서 신발 code값 추출
function getStyleCode(value) {
    const n = value.split("/");
    //해당 상품이 신발일 경우에만 code값 리턴, 아닐경우 null값 리턴
    return n[n.length - 5] === "fw" ? n[n.length - 3] : null;
}
//발매예정 상품리스트 크롤링
function crawl() {
    return __awaiter(this, void 0, void 0, function* () {
        //var driver = new webdriver.Builder().forBrowser("chrome").build();
        var driver = new selenium_webdriver_1.default.Builder()
            .withCapabilities(selenium_webdriver_1.default.Capabilities.chrome())
            .build();
        //webdriver URL 호출
        driver.get("https://www.nike.com/kr/launch/?type=upcoming");
        //리스트값 저장할 배열 선언
        const items = [];
        const el = yield driver.findElements(selenium_webdriver_1.By.className("launch-list-item  upcomingItem"));
        for (let index = 0; index < el.length; index++) {
            const element = el[index];
            const item = {
                title: "",
                code: "",
                release_date: "",
                location: "",
            };
            /*     element
              .findElement(By.className("img-component"))
              .getAttribute("src")
              .then((img_path: string) => (item.img_path = img_path)); */
            const href = yield element
                .findElement(selenium_webdriver_1.By.tagName("a"))
                .getAttribute("href");
            const code = getStyleCode(href);
            if (code !== null) {
                const title = yield element
                    .findElement(selenium_webdriver_1.By.className("txt-description"))
                    .getText();
                const release_date = yield element.getAttribute("data-active-date");
                item.title = title;
                item.release_date = release_date;
                item.code = code;
                item.location = href;
                //배열에 크롤링값 저장
                items.push(item);
            }
        }
        // DB에 값 저장
        items.forEach(({ title, code, location, release_date }) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new shoes_1.default({
                    title,
                    code,
                    location,
                    release_date,
                    method: "FCFS",
                    status: "upcoming",
                }).save();
            }
            catch (error) {
                console.error(error);
            }
        }));
        // DB에 값 저장 후 driver 연결종료.
        driver.quit();
        //발매예정 상품디테일정보 크롤링
        shoes_1.default.find({ status: "upcoming" }, (err, docs) => {
            console.log(docs);
        });
    });
}
node_cron_1.default.schedule("1 * * * * *", () => {
    crawl();
});
//# sourceMappingURL=nike.js.map