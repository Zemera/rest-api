import { DeliveryType } from "src/business/enum/DeliveryType";
import { PaymentType } from "src/business/enum/PaymentType";
import { City } from "./city.interface";
import { Translate } from "./common/translate.interface";
import { Delivery } from "./delivery.interface";
import { Seo } from "./seo.interface";
import { WorkingHours } from "./workingHours.interface";
import { Document } from 'mongoose';

export interface Store  extends Document   {
    name: Translate;
    pic: Array<string>;
    city: City | string;
    address: Translate;
    tel: string;
    fax: string;
    mobile: string;
    mail: string;
    description: Translate;
    //что это такое
    adminActive: boolean;
    active: boolean;
    callToStore: boolean;
    callNumber: boolean;
    //????
    message: string;
    adminMessage: string;
    payments: Array<PaymentType>;
    deliveryTypes: Array<DeliveryType>;
 //   items: Array<ItemStoreOffer>;
    delivery: Array<Delivery>;
    // deliveryPlaces: Array<Delivery>;
    //packages: Array<PackageStoreOffer>;
    storeLocation: Location;
  //  rate: Array<IRate>;
    weekHours: WorkingHours;
    weekEndHours: WorkingHours;
    shabatHours: WorkingHours;
    seo: Seo;
    link: string;
    ind: number;
    toHomePage: boolean;
    reviewsCount: number;
    rating: number;
}