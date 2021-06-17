/* eslint-disable prettier/prettier */
import { City } from "./city.interface";
import { Document } from 'mongoose';
export interface Rate  extends Document  {
    fullName: string;
    rate: number;
    feedback: string;
    approved: boolean;
    city: string | City;
    city_name: string;
   // item: string | IItemModel;
    createdAt: Date;
}
