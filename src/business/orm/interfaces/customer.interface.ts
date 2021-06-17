import { Document } from 'mongoose';

export interface Customer extends Document {
  fullName: string;
  email: string;
  phone: string;

  sourceUrl: string;
  source: string;
}
