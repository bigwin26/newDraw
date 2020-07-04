"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shoes_1 = __importDefault(require("../schemas/shoes"));
const schemas_1 = __importDefault(require("../schemas"));
schemas_1.default();
shoes_1.default.find({ status: "upcoming" }, (err, docs) => {
    docs.forEach(({ code, location }) => {
        console.log("ele", location);
    });
});
//# sourceMappingURL=tes.js.map