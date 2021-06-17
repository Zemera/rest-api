import { timeRange } from "./deliveryMan/timeRange";

interface StoreTime{
     hour: number;
     minute: number;
}

export interface WorkingHours{
     active: boolean;
     open: StoreTime;
     close: StoreTime;
     timesRanges: timeRange
     day : number;
}