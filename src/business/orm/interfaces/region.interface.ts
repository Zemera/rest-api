import { Translate } from "./common/translate.interface";
import { Seo } from "./seo.interface";
import { Document } from 'mongoose';
export interface Region   extends Document  {
    name: Translate;
    country: any;
    cities: Array<any>;
    pic: string;
    itemCount: number;
    averagePrice: number;
    seo: Seo;
}