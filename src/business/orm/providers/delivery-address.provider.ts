import { Connection } from 'mongoose';
import { ModelEnum } from '../../enum/ModelEnum';
import { DeliveryAddressSchema } from '../schemas/delivery-address.schema';
import { TransfertOrdersSchema } from '../schemas/transfert-orders.schema';

export const deliveryAddressProviders = [
  {
    provide: ModelEnum.DeliveryAddressModel,
    useFactory: (connection: Connection) =>
      connection.model('DeliveryAddress', DeliveryAddressSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
