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
const schemas_1 = __importDefault(require("../schemas"));
schemas_1.default();
shoes_1.default.find({ status: "upcoming" }, (err, docs) => {
    //docs.forEach(({ code, location }) => {
    for (let index = 0; index < docs.length; index++) {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            const { code, location } = docs[index];
            var driver = new selenium_webdriver_1.default.Builder()
                .withCapabilities(selenium_webdriver_1.default.Capabilities.chrome())
                .build();
            //webdriver URL 호출
            yield driver.get(location);
            const color = yield driver
                .findElement(selenium_webdriver_1.By.className("txt-title"))
                .getText();
            const price = yield driver.findElement(selenium_webdriver_1.By.className("price")).getText();
            const description = yield driver
                .findElement(selenium_webdriver_1.By.className("p1_tail"))
                .getText();
            try {
                yield shoes_1.default.updateMany({ code }, { color, price, description });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                yield driver.quit();
            }
        }), 10000 * index);
    }
    //});
});
//# sourceMappingURL=tes.js.map