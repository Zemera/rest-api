import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StatusType } from 'src/business/enum/StatusType';
import { Invoice } from 'src/business/orm/interfaces/invoice/invoice.interface';
import { TransfertOrders } from 'src/business/orm/interfaces/transfertOrder.interface';
import { User } from 'src/business/orm/interfaces/user.interface';
import { InvoicePaginate } from 'src/business/orm/schemas/invoice/invoice.schema';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { CountryPaginate } from '../business/orm/schemas/country.schema';


@Injectable()
export class InvoiceService extends BaseService<Invoice>{
    transfertOrderModel: Model<TransfertOrders>;
    constructor(
        @Inject(ModelEnum.InvoiceModel) invoiceModel: Model<Invoice>,
        @Inject(ModelEnum.TransfertOrdersModel) transfertOrderModel: Model<TransfertOrders>,
    ) {
        super(invoiceModel, InvoicePaginate);
        this.transfertOrderModel = transfertOrderModel
    }

    async generateInvoice(
        user: User,
        orders: Array<TransfertOrders>,
        from: Date,
        to: Date
    ): Promise<any> {
        const invoice: Invoice = ({
            from,
            to,
            totalSum: 0,
            incommingSum: 0,
            outcommingSum: 0,
            cmscommission: 0,
            status: StatusType.NewOrder,
            additional: 0,
            adminApprove: false,
            userApprove: false,
            user: user._id,
            draft: true,
            notes: "",
            incommingOrders: [],
            outcommingOrders: []
        } as any);

        const cst = await orders.map(order => {
            if (user.stores.indexOf(order.toStore) !== -1) {
                invoice.incommingSum += order.price;
                invoice.incommingOrders.push(order._id);
            } else if (order.fromUser+"" === user._id+"") {
                invoice.outcommingSum += order.price;
                invoice.outcommingOrders.push(order._id);
            }            
        });

        invoice.totalSum = invoice.incommingSum + invoice.outcommingSum;
        return invoice;

    }
    checkPaginate(): Promise<any> {
        const conditions = {};
        const page = 1; const limit = 10;
        const options = {
            perPage: 2,
            limit,
            lean: true,
            leanWithId: true,
            page,
            skip: (page - 1) * (limit),
        };

        return CountryPaginate.paginate(conditions, options)

    }
}
