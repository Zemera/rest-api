import { Document } from 'mongoose';

export interface Recipient extends Document {
  _id: string;
  fullname: string;
  phone: string;
}
