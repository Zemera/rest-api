/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Category } from './category.interface';
import { Translate } from './common/translate.interface';

export interface Item extends Document {
  _id: string;
  name: Translate;
  pic: string;
  code: string;
  additional: boolean;
  category?: Array<Category>;
  picture: string;
}
