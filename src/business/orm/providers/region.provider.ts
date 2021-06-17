import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { RegionSchema } from '../schemas/region.schema';

export const regionProviders = [
    {
        provide: ModelEnum.RegionModel,
        useFactory: (connection: Connection) => connection.model('Regions', RegionSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]
