import { Source } from "../../enum/SourceEnum";
import { Document } from 'mongoose';


export interface IOrder extends Document {
    orderDate: Date;
    orderSum: number;
    source: Source;
}