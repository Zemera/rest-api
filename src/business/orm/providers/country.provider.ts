import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { CountrySchema } from '../schemas/country.schema';
import { RegionSchema } from '../schemas/region.schema';

export const countriesProviders = [
    {
        provide: ModelEnum.CountryModel,
        useFactory: (connection: Connection) => connection.model('Country', CountrySchema),
        inject: ['DATABASE_CONNECTION'],
    }
]
