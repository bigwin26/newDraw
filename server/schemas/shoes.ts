import mongoose from "mongoose";

const { Schema } = mongoose;
const shoesShema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Shoes", shoesShema);
