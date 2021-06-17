import { Connection } from 'mongoose';
import { userSchema } from '../schemas/user.schema';
import { ModelEnum } from '../../enum/ModelEnum';

export const usersProviders = [
  {
    provide: ModelEnum.UserModel,
    useFactory: (connection: Connection) =>
      connection.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
