"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const nike_1 = __importDefault(require("./nike"));
exports.default = () => {
    //매일 아침 6시마다 상품리스트 업데이트
    node_cron_1.default.schedule("* 6 * * *", () => {
        nike_1.default();
    });
};
//# sourceMappingURL=index.js.map