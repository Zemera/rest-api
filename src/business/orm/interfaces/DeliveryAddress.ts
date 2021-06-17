import { Document } from 'mongoose';
import { DestinationType } from 'src/business/enum/DestinationType';
import { City } from './city.interface';

export interface DeliveryAddress extends Document {
  _id: string;
  destinationType: DestinationType;
  companyName: string;
  city: City | string;
  street: string;
  house: string;
  floor: number;
  apartment: number;
  instructions: string;
}
