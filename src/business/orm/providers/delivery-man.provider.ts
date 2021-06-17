import { Connection, connection } from "mongoose";
import { ModelEnum } from "../../enum/ModelEnum";
import { DeliveryManSchema } from "../schemas/deliveryMan/deliveryMan.schema";

export const deliveryManProvider =  [{
    provide: ModelEnum.DeliveryManModel,
    useFactory: (connection:Connection) => connection.model('deliveryMan', DeliveryManSchema),
    inject: ['DATABASE_CONNECTION']

}]