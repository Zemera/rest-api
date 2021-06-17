import {Document } from "mongoose"
import { City } from "../city.interface";
import { WorkingHours } from "../workingHours.interface";
import { DeliveryArea } from "./deliveryArea.interface";
import {TransportType}  from "../../../enum/deliveryMan/TransportType"
 
export interface  DeliveryMan extends Document {
 fullName : string ;
 phone : string ;
 email: string ;
 city : City;
 deliveryAreas: Array<DeliveryArea>;
 workingTimes: Array<WorkingHours>;
 age : number;
 transportType:TransportType; 
}