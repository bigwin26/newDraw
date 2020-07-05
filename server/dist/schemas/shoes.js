"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const shoesShema = new Schema({
    title: {
        type: String,
        required: true,
    },
    code: { type: String, required: true, unique: true },
    color: { type: String },
    price: { type: String },
    description: { type: String },
    location: { type: String },
    release_date: { type: String, required: true },
    img_path: { type: String },
    main_img_path: { type: String },
    method: { type: String, required: true },
    status: { type: String, required: true },
});
exports.default = mongoose_1.default.model("Shoes", shoesShema);
//# sourceMappingURL=shoes.js.map