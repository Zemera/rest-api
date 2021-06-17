import { Connection } from "mongoose";
import { ModelEnum } from "../../enum/ModelEnum";
import { RecipientSchema } from "../schemas/recipient.schema";

export const recipientProviders = [
    {
        provide: ModelEnum.RecipientModel,
        useFactory: (connection: Connection) => connection.model('Recipient', RecipientSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]