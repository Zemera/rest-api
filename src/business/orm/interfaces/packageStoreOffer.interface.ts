import { Document } from 'mongoose';
export class PackageStoreOffer  extends Document  {
    package:string;
   // package: IPackage | String;
    price: number; // цена магазина на комплект
}