import { Schema, SchemaTypes } from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import { PaginateModel } from "mongoose";
import { Region } from "../interfaces/region.interface";
import { model } from "mongoose";
 const RegionSchema = new  Schema({
    name: {
        en: String,
        heb: String
    },
    cities: [
        { type: SchemaTypes.ObjectId, ref: "City" }
    ],
    country: { type: SchemaTypes.ObjectId, ref: "Country" },
    pic: String,
    itemCount: Number,
    averagePrice: Number,
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

RegionSchema.plugin(mongoosePagination);

export const RegionPaginate: PaginateModel<Region> = model("Regions", RegionSchema);
export {RegionSchema} ;