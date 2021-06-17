import { Connection } from 'mongoose';
import { OrderSchema } from '../schemas/order.schema';
import { ModelEnum } from '../../enum/ModelEnum';

export const ordersProviders = [
    {
        provide: ModelEnum.OrderModel,
        useFactory: (connection: Connection) => connection.model('Order', OrderSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]


