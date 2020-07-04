import mongoose from "mongoose";
export interface IShoes extends mongoose.Document {
    title: string;
    code: string;
    color: string;
    price: string;
    location: string;
    release_date: string;
    img_path: string;
    main_img_path: string;
    method: string;
    status: string;
}
declare const _default: mongoose.Model<IShoes, {}>;
export default _default;
