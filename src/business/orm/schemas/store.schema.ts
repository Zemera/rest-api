
import { DeliveryType } from '../../../business/enum/DeliveryType';
import { PaymentType } from '../../../business/enum/PaymentType';
import { mongoosePagination } from "ts-mongoose-pagination";
import { SchemaTypes ,PaginateModel,Schema,  model} from "mongoose";
import { Store } from '../interfaces/store.interface';
 const StoreSchema  = new Schema({
    name: {
        en: String,
        heb: String
    },
    pic: [String],
    city: { type: SchemaTypes.ObjectId, ref: "City" },
    address: {
        en: String,
        heb: String
    },
    tel: String,
    fax: String,
    mobile: String,
    mail: String,
    description: {
        en: String,
        heb: String
    },
    adminActive: Boolean,
    active: Boolean,
    callToStore: Boolean,
    callNumber: Boolean,
    message: String,
    adminMessage: String,
    payments: [{ type: String, default: PaymentType.phone, enum: [0, 1] }],
    deliveryTypes: [{ type: String, default: DeliveryType.delivery, enum: [0, 1, 2] }],
    // items: [
    //     {
    //         item: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    //         price: Number,
    //         discount: Number,
    //         inStock: { type: Boolean, default: true }
    //     }
    // ],
    delivery: [{
        city: { type: SchemaTypes.ObjectId, ref: "City" },
        price: Number,
    }],
    // packages: {
    //     package: { type: mongoose.SchemaTypes.ObjectId, ref: "Package" },
    //     price: Number
    // },
    storeLocation: {
        lat: Number,
        lng: Number
    },
    // rate: [
    //     { type: SchemaTypes.ObjectId, ref: "Rate" }
    // ],
    weekHours: {
        active: Boolean,
        open: {
            hour: Number,
            minute: Number
        },
        close: {
            hour: Number,
            minute: Number
        },
    },
    weekEndHours: {
        active: Boolean,
        open: {
            hour: Number,
            minute: Number
        },
        close: {
            hour: Number,
            minute: Number
        },
    },
    shabatHours: {
        active: Boolean,
        open: {
            hour: Number,
            minute: Number
        },
        close: {
            hour: Number,
            minute: Number
        },
    },
    link: String,
    ind: Number,
    toHomePage: Boolean,
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

StoreSchema.plugin(mongoosePagination);

export const StorePaginate: PaginateModel<Store> = model("Store", StoreSchema);
export {StoreSchema} ;