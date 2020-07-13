"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const nike_1 = __importDefault(require("./nike"));
const addcron_1 = __importDefault(require("./common/addcron"));
exports.default = () => {
    //매일 아침 6시마다 상품리스트 업데이트
    //cron.schedule("* 6 * * *", () => {
    node_cron_1.default.schedule("14 * * * *", () => {
        nike_1.default();
    });
    //});
    //매일 아침 6시반 발매 푸시알림 등록
    node_cron_1.default.schedule("24 * * * *", () => {
        //cron.schedule("30 6 * * *", () => {
        addcron_1.default();
        //});
    });
};
//# sourceMappingURL=index.js.map