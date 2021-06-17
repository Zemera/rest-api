
import { mongoosePagination } from "ts-mongoose-pagination";
import { Country } from '../interfaces/country.interface';
import { SchemaTypes ,PaginateModel,Schema,  model} from "mongoose";




 const CountrySchema =  new Schema({
    name: {
        en: String,
        heb: String
    },
    regions: [
        { type: SchemaTypes.ObjectId, ref: "Region" }
    ],
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
CountrySchema.plugin(mongoosePagination);

export const CountryPaginate: PaginateModel<Country> = model("countries", CountrySchema);
export {CountrySchema} ;