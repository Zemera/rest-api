/* eslint-disable prettier/prettier */

import { mongoosePagination } from "ts-mongoose-pagination";
import { Country } from '../interfaces/country.interface';
import { SchemaTypes, PaginateModel, Schema, model } from "mongoose";

const ItemSchema: Schema = new Schema({
    name: {
        en: String,
        heb: String
    },
    code: String,
    picture: String,
    description: {
        en: String,
        heb: String
    },
    additional: Boolean,
    recommended: Boolean,
    inStock: { type: Boolean, default: false },
    rate: [
        { type: SchemaTypes.ObjectId, ref: "Rate" }
    ],
    category: [{ type: SchemaTypes.ObjectId, ref: "Category" }],
    dayDeal: Boolean,
    price: Number,
    seo: {
        h1: {
            en: String,
            heb: String
        },
        title: {
            en: String,
            heb: String,
        },
        keywords: {
            en: String,
            heb: String
        },
        description: {
            en: String,
            heb: String
        }
    }
});
ItemSchema.plugin(mongoosePagination);

export const ItemPaginate: PaginateModel<Country> = model("items", ItemSchema);
export { ItemSchema };