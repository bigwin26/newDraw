"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schemas_1 = __importDefault(require("./schemas"));
const nike_1 = __importDefault(require("./crawler/nike"));
const router_1 = __importDefault(require("./router"));
const app = express_1.default();
const port = 3000;
//mongoDB연결
schemas_1.default();
//crawler실행
nike_1.default();
//라우터
app.use("/shoes", router_1.default);
app.listen(port, (err) => {
    if (err)
        return console.error(err);
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map