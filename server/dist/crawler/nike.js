"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const selenium_webdriver_1 = __importStar(require("selenium-webdriver"));
const imgdownload_1 = __importDefault(require("./common/imgdownload"));
//크롤링한 주소에서 상품 code값 추출
function getStyleCode(value) {
    const n = value.split("/");
    //해당 상품이 신발일 경우에만 code값 리턴, 아닐경우 null값 리턴
    return n[n.length - 5] === "fw" ? n[n.length - 3] : null;
}
//발매예정 상품리스트 크롤링
function crawl() {
    return __awaiter(this, void 0, void 0, function* () {
        //const driver = new webdriver.Builder().forBrowser("chrome").build();
        const driver = new selenium_webdriver_1.default.Builder()
            .withCapabilities(selenium_webdriver_1.default.Capabilities.chrome())
            .build();
        //webdriver URL 호출
        driver.get("https://www.nike.com/kr/launch/?type=upcoming");
        //리스트값 저장할 배열 선언
        let items = [];
        //발매예정 리스트 가져오기
        const elements = yield driver.findElements(selenium_webdriver_1.By.className("launch-list-item  upcomingItem"));
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
            const href = yield element
                .findElement(selenium_webdriver_1.By.tagName("a"))
                .getAttribute("href");
            const code = getStyleCode(href);
            if (code !== null) {
                const title = yield element
                    .findElement(selenium_webdriver_1.By.className("txt-description"))
                    .getText();
                let method = yield element
                    .findElement(selenium_webdriver_1.By.className("txt-subject"))
                    .getText();
                method = method.slice(-5, -3) === "응모" ? "DRAW" : "FCFS";
                const release_date = yield element.getAttribute("data-active-date");
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
        items.forEach(({ title, method, code, location, release_date }) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new shoes_1.default({
                    title,
                    code,
                    color: null,
                    price: null,
                    location,
                    release_date,
                    method,
                    status: "upcoming",
                }).save();
            }
            catch (error) {
                console.error(error);
            }
        }));
        // DB에 값 저장 후 driver 연결종료.
        yield driver.quit();
        //발매예정 상품디테일정보 크롤링
        yield shoes_1.default.find({ status: "upcoming", color: null, price: null }, (err, docs) => {
            //docs.forEach(({ code, location }) => {
            for (let index = 0; index < docs.length; index++) {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    const { code, location } = docs[index];
                    const driver = new selenium_webdriver_1.default.Builder()
                        .withCapabilities(selenium_webdriver_1.default.Capabilities.chrome())
                        .build();
                    //webdriver URL 호출
                    yield driver.get(location);
                    const color = yield driver
                        .findElement(selenium_webdriver_1.By.className("txt-title"))
                        .getText();
                    const price = yield driver
                        .findElement(selenium_webdriver_1.By.className("price"))
                        .getText();
                    const description = yield driver
                        .findElement(selenium_webdriver_1.By.className("p1_tail"))
                        .getText();
                    const images = yield driver.findElements(selenium_webdriver_1.By.className("uk-width-1-2 image-list"));
                    function saveImg(images) {
                        return __awaiter(this, void 0, void 0, function* () {
                            images.forEach((element, index) => __awaiter(this, void 0, void 0, function* () {
                                const imgsrc = yield element
                                    .findElement(selenium_webdriver_1.By.tagName("img"))
                                    .getAttribute("data-product-image");
                                imgdownload_1.default(code, imgsrc, index);
                            }));
                        });
                    }
                    saveImg(images);
                    try {
                        yield shoes_1.default.updateMany({ code }, { color, price, description });
                    }
                    catch (error) {
                        console.error(error);
                    }
                    finally {
                        setTimeout(() => {
                            driver.quit();
                        }, 5000);
                    }
                }), 15000 * index);
            }
        });
    });
}
exports.default = crawl;
//# sourceMappingURL=nike.js.map