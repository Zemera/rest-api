import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { CitySchema } from '../schemas/city.schema';

export const citiesProviders = [
    {
        provide: ModelEnum.CityModel,
        useFactory: (connection: Connection) => connection.model('City', CitySchema),
        inject: ['DATABASE_CONNECTION'],
    }
]
