"use strict";
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
const express_1 = __importDefault(require("express"));
const schemas_1 = __importDefault(require("./schemas"));
const crawler_1 = __importDefault(require("./crawler"));
const router_1 = __importDefault(require("./router"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 8080;
dotenv.config();
//mongoDB연결
schemas_1.default();
//crawler실행
crawler_1.default();
//cors
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors_1.default(corsOptions));
//라우터
app.use("/api", router_1.default);
app.listen(port, (err) => {
    if (err)
        return console.error(err);
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map