import { Document } from "mongoose";
import { StatusType } from "src/business/enum/StatusType";
import { TransfertOrders } from "../transfertOrder.interface";
import { User } from "../user.interface";

export interface Invoice extends Document {
    from : Date ,
    to : Date ,
    totalSum : number ,
    incommingSum: number ,
    outcommingSum: number ,
    cmscommission:number ,
    status: StatusType ,
    additional : number,
    adminApprove:boolean,
    userApprove:boolean,
    user:User ,
    draft:boolean ,
    notes:string ,
    incommingOrders: Array<TransfertOrders>
    outcommingOrders: Array<TransfertOrders>
}