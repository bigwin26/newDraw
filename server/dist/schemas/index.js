"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const endpoints_config_1 = __importDefault(require("../endpoints.config"));
exports.default = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== "production") {
            mongoose_1.default.set("debug", true);
        }
        mongoose_1.default.connect(endpoints_config_1.default.MONGO_URL, {
            dbName: "yourdraw",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }, (error) => {
            if (error) {
                console.log("db error", error);
            }
            else {
                console.log("connected db");
            }
        });
    };
    connect();
    mongoose_1.default.connection.on("error", (error) => {
        console.error("db error", error);
    });
    mongoose_1.default.connection.on("disconnected", () => {
        console.error("disconnected db, Retry the connection. ");
        connect();
    });
    require("./shoes");
};
//# sourceMappingURL=index.js.map