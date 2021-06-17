import { City } from "./city.interface";
import { Document } from 'mongoose';
export interface Delivery  extends Document  {
     city: City | string;
     price: number;
}