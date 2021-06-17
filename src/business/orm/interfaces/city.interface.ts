import { Translate } from "./common/translate.interface";
import { Country } from "./country.interface";
import { Region } from "./region.interface";
import { Seo } from "./seo.interface";
import { Document } from 'mongoose';

export interface City extends Document  {
    name: Translate;
    description: Translate;
    pic: string;
    region: string | Region;
    country: string | Country;
    inReview: boolean;
    inPopular: boolean;
    itemCount: number;
    averagePrice: number;
    seo: Seo;
}