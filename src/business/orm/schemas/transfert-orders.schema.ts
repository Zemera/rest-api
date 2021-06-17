import { mongoosePagination } from 'ts-mongoose-pagination';

import { SchemaTypes, PaginateModel, Schema, model } from 'mongoose';
import { TransfertOrders } from '../interfaces/transfertOrder.interface';

const TransfertOrdersSchema = new Schema({
  fromUser: {type: SchemaTypes.ObjectId, ref: "User"},
  toStore: { type: SchemaTypes.ObjectId, ref: "Store" },
  address: { type: SchemaTypes.ObjectId, ref: 'DeliveryAddress' },
  recipient: { type: SchemaTypes.ObjectId, ref: 'Recipient' },
  delivery: {
    call: Boolean,
    deliveryType: { type: String, enum: [0, 1, 2] },
    realisationDate: Date,
    realisationTime: String,
    deliveryPrice: Number,
  },
  orderItems: [
    {
      item: { type: SchemaTypes.ObjectId, ref: 'Item' },
      price: Number,
      description: String,
      count: Number,
    },
  ],
  price:Number ,
  customer: { url: String, source: String },
  status: { type: Number, enum: [0, 1, 2, 3, 4, 5, 6], default: 0 },
}, {timestamps:true});

export enum OrderStatus {
  New,
  Accepted,
  InProcess,
  Delivery,
  Passed,
}

// call: Boolean,
//   delivery_date:String,
//     delivery_time:String,
TransfertOrdersSchema.plugin(mongoosePagination);

export const TransfertOrdersPaginate: PaginateModel<TransfertOrders> = model(
  'TransfertOrders',
  TransfertOrdersSchema,
);
export { TransfertOrdersSchema };
