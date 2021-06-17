import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { StoreSchema } from '../schemas/store.schema';

export const storesProviders = [
    {
        provide: ModelEnum.StoreModel,
        useFactory: (connection: Connection) => connection.model('Store', StoreSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]
