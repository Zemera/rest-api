import { Connection } from "mongoose";
import { ModelEnum } from "../../enum/ModelEnum";
import { TransfertOrdersSchema } from "../schemas/transfert-orders.schema";

export const tranfertOrderProviders = [
    {
        provide: ModelEnum.TransfertOrdersModel,
        useFactory: (connection: Connection) => connection.model('TransfertOrders', TransfertOrdersSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]