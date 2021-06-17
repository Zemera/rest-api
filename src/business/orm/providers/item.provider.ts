import { Connection } from "mongoose";
import { ModelEnum } from "../../enum/ModelEnum";
import { ItemSchema } from "../schemas/item.schema";

export const itemProviders = [
    {
        provide: ModelEnum.ItemModel,
        useFactory: (connection: Connection) => connection.model('Items', ItemSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]