import { mongoosePagination } from 'ts-mongoose-pagination';
import { Country } from '../interfaces/country.interface';
import { SchemaTypes, PaginateModel, Schema, model } from 'mongoose';

const RecipientSchema = new Schema({
  fullname: String,
  phone: String,
});
RecipientSchema.plugin(mongoosePagination);

export const RecipientPaginate: PaginateModel<Country> = model(
  'Recipients',
  RecipientSchema,
);
export { RecipientSchema };
