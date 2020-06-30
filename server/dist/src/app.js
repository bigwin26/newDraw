"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schemas_1 = __importDefault(require("./schemas"));
const app = express_1.default();
const port = 3000;
schemas_1.default();
app.get("/", (req, res) => {
    res.send("HomePage");
});
app.listen(port, (err) => {
    if (err)
        return console.error(err);
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map