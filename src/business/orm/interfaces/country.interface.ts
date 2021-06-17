import { Translate } from "./common/translate.interface";
import { Region } from "./region.interface";
import { Seo } from "./seo.interface";
import { Document } from 'mongoose';
export interface Country extends Document   {
    name: Translate;
    regions: Array<string> | Array<Region>;
    seo: Seo;
}