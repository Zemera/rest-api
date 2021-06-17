/* eslint-disable prettier/prettier */

import { Schema, Document, Model, model, SchemaTypes } from "mongoose";
import { Seo } from "./seo.interface";
import { Translate } from "./common/translate.interface";
import { Item } from "./item";


export interface Category {
    name: Translate;
    tagline: Translate;
    pic: string;
    description: Translate;
    renderOnHomePage: boolean;
    toTopMenu: boolean;
    toFooterMenu: boolean;
    disabled: boolean;
    count: number;
    avgPrice: number;
    subcategory: Array<Category> | Array<string>;
    items: Array<Item>;
    seo: Seo;
}

export interface ICategoryModel extends Category, Document {

}

// export var CategorySchema: Schema = new Schema({
//     name: {
//         en: String,
//         heb: String
//     },
//     tagline: {
//         en: String,
//         heb: String
//     },
//     pic: String,
//     toTopMenu: Boolean,
//     disabled: {type: Boolean, default: true},
//     toFooterMenu: Boolean,
//     subcategory: [{ type: SchemaTypes.ObjectId, ref: "Category" }],
//     description: {
//         en: String,
//         heb: String
//     },
//     count: Number,
//     avgPrice: Number,
//     renderOnHomePage: Boolean,
//     items: [
//         { type: SchemaTypes.ObjectId, ref: "Item" }
//     ],
//     seo: {
//         h1: {
//             en: String,
//             heb: String
//         },
//         title: {
//             en: String,
//             heb: String,
//         },
//         keywords: {
//             en: String,
//             heb: String
//         },
//         description: {
//             en: String,
//             heb: String
//         }
//     }
// });

// export const CategoryModel: Model<ICategoryModel> = model<ICategoryModel>("Category", CategorySchema);
