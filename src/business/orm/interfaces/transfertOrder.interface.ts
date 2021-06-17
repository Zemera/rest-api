import { DeliveryType } from '../../enum/DeliveryType';
import { Document } from 'mongoose';
import { Recipient } from './recipient';
import { DeliveryAddress } from './DeliveryAddress';
import { Item } from './item';
import { Customer } from './customer.interface';
import { User } from './user.interface';
import { Store } from './store.interface';

type OfferItem = {
  item: string | Item;
  price: number;
  count: number;
  description: string;
};

type Delivery = {
  call: boolean;
  deliveryType: DeliveryType;
  realisationDate: Date;
  realisationTime: string;
  deliveryPrice: number;
};

export interface TransfertOrders extends Document {
  fromUser: string 
  toStore: string ;
  address: string | Partial<DeliveryAddress>;
  recipient: string | Recipient;
  customer: string | Customer;
  delivery: Delivery;
  price:number ;
  orderItems: Array<string> | Array<OfferItem>;
}
