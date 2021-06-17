import { Connection } from "mongoose";
import { ModelEnum } from "src/business/enum/ModelEnum";
import { invoiceSchema } from "../schemas/invoice/invoice.schema";

export const invoiceProviders = [
    {
        provide: ModelEnum.InvoiceModel,
        useFactory: (connection: Connection) => connection.model('Invoice', invoiceSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]