import { SchemaTypes, PaginateModel, Schema, model } from 'mongoose';
import { mongoosePagination } from 'ts-mongoose-pagination';
import { DeliveryAddress } from '../interfaces/DeliveryAddress';

const DeliveryAddressSchema: Schema = new Schema({
  destinationType: { type: String, enum: ['private', 'office'] },
  companyName: String,
  city: { type: SchemaTypes.ObjectId, ref: 'City' },
  street: String,
  house: String,
  floor: String,
  apartment: String,
  instructions: String,
});

DeliveryAddressSchema.plugin(mongoosePagination);

export const DeliveryAddressPaginate: PaginateModel<DeliveryAddress> = model(
  'DeliveryAddress',
  DeliveryAddressSchema,
);
export { DeliveryAddressSchema };
