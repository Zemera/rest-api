import { model, PaginateModel, Schema, SchemaTypes } from "mongoose";
import { TransportType } from "../../../enum/deliveryMan/TransportType";
import { mongoosePagination } from "ts-mongoose-pagination";
import { DeliveryMan } from "../../interfaces/deliveryMan/deliveryMan.interface";


 export const DeliveryManSchema  = new Schema({
    fullName : {type:String , required:true} ,
    email : {type:String , required:true} ,
    phone :  {type: String ,required:true},
    city: {type:SchemaTypes.ObjectId , ref: 'City', required:true},
    deliveryAreas: [{
        city:{type:SchemaTypes.ObjectId, ref: 'City'},
        price:Number
    }],
    workingTimes: [{
        active: Boolean,
        open: {
            hour: Number,
            minute: Number
        },
        close: {
            hour: Number,
            minute: Number
        },
        timesRanges: [{
            range_id: Number,  
            available : Boolean
        }],
        day: { type:Number , enum: [0,1,2,3,4,5,6]}
    }],
    age: Number,
    transportType: {type:String, default: TransportType.Scooter , enum:[0,1,2,3]}
});
 DeliveryManSchema.plugin(mongoosePagination);

 export const deliveryManPagination:PaginateModel<DeliveryMan>  = model("deliveryMan", DeliveryManSchema);