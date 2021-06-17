import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { User } from '../business/orm/interfaces/user.interface';
import { UserPaginate } from '../business/orm/schemas/user.schema';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(@Inject(ModelEnum.UserModel) protected model: Model<User>) {
    super(model, UserPaginate);
  }

  findByEmail(email: string): Promise<User> {
    return this._model.findOne({ email: email });
  }
}
