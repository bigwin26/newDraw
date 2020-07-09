import mongoose from "mongoose";

const { Schema } = mongoose;

export interface IShoes extends mongoose.Document {
  title: string;
  code: string;
  color: string | null;
  price: string | null;
  description: string;
  location: string;
  release_date: string;
  img_path: string;
  main_img_path: string;
  method: string;
  status: string | null;
}

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

export default mongoose.model<IShoes>("Shoes", shoesShema);
