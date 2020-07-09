import mongoose from "mongoose";
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
declare const _default: mongoose.Model<IShoes, {}>;
export default _default;
