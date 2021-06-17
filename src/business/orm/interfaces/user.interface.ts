import { UserProvider } from "src/business/enum/UserProvider";
import { UserType } from "src/business/enum/UserType";
import { Store } from "./store.interface";
import { Document } from 'mongoose'; 
import { DeliveryAddress } from "./DeliveryAddress";

export interface User  extends Document {
    fullName: string;
    mobile: string;
    email: string;
    password: string;
    pic: string;
    country: string;
    birthday: Date;
    sms: boolean;
    userType: UserType;
    active: boolean;
    token: string;
    socialToken: string;
    deliveryAddress: Array<DeliveryAddress>;
    stores: Array<string | Store>,
    changePassword: {
      token: string,
      creationDate: Date
    };
    provider: UserProvider;
    providerData: {
      providerID: string,
      providerToken1: string,
      providerToken2: string,
    };
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;

      /*gToken: string;*/
  hashPassword(password: string, salt: string): string;
  comparePassword(password: string, hash: string): Promise<boolean>;
  hashPasswordMethod(password: string): Promise<string>;
  }