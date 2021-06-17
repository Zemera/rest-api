import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { сustomerSchema } from '../schemas/customer.schema';

export const customerProviders = [
  {
    provide: ModelEnum.CustomerModel,
    useFactory: (connection: Connection) =>
      connection.model('Customer', сustomerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
