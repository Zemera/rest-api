import { Source } from "../../business/enum/SourceEnum";

export class CreateOrderDTO {
    readonly orderDate: Date;
    readonly orderSum: number;
    readonly source: Source;

    constructor(item: any){
        this.orderDate = item.order_date;
        this.orderSum = item.sum_of_order;
        this.source = item.source;
    }
}