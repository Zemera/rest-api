/* eslint-disable prettier/prettier */
import { SchemaTypes, PaginateModel, Schema, model } from 'mongoose';
import { Customer } from '../interfaces/customer.interface';
import { mongoosePagination } from 'ts-mongoose-pagination';

const сustomerSchema = new Schema({
  phone: String,
  email: String,
  fullName: String,
  sourceUrl: String,
  source: String,
  orders: [{ type: SchemaTypes.ObjectId, ref: 'Order' }],
});

сustomerSchema.plugin(mongoosePagination);

export const CustomerPaginate: PaginateModel<Customer> = model(
  'Customer',
  сustomerSchema,
);
export { сustomerSchema };
