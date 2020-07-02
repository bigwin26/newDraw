import mongoose from "mongoose";

const { Schema } = mongoose;
const shoesShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: { type: String, required: true, unique: true },
  color: { type: String },
  price: { type: String },
  release_date: { type: String, required: true },
  img_path: { type: String },
  main_img_path: { type: String },
  method: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model("Shoes", shoesShema);
