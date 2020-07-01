import mongoose from "mongoose";

const { Schema } = mongoose;
const shoesShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  price: { type: String, required: true },
  release_date: { type: String, required: true },
  img_path: { type: String, required: true },
  method: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model("Shoes", shoesShema);
