import { City } from '../interfaces/city.interface';
import { mongoosePagination } from "ts-mongoose-pagination";

import { SchemaTypes , PaginateModel, Schema,  model} from "mongoose";

 const CitySchema = new Schema({
    name: {
        en: String,
        heb: String
    },
    description: {
        en: String,
        heb: String
    },
    region: { type:SchemaTypes.ObjectId, ref: "Region" },
    country: { type: SchemaTypes.ObjectId, ref: "Country" },
    pic: String,
    inReview: Boolean,
    inPopular: Boolean,
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

CitySchema.plugin(mongoosePagination);

export const CityPaginate: PaginateModel<City> = model("Cities", CitySchema);
export {CitySchema} ;