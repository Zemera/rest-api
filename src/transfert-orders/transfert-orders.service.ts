import { Inject, Injectable } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { TransfertOrders } from '../business/orm/interfaces/transfertOrder.interface';
import { User } from '../business/orm/interfaces/user.interface';
import { TransfertOrdersPaginate } from '../business/orm/schemas/transfert-orders.schema';


@Injectable()
export class TransfertOrdersService extends BaseService<TransfertOrders> {
  constructor(@Inject(ModelEnum.TransfertOrdersModel) protected model: Model<TransfertOrders>) {
    super(model, TransfertOrdersPaginate);
  }

  incomingOrders(user: User) {
    return this._model.find({
      toStore: {
        $in: user.stores
      }
    })
  }

  passedOrders(user) {
    return this._model.find({
      fromUser: user._id
    })
  }

  //get invoice by user or by storeId  
  getUserOrder(user, from, to) {
    return this._model.find({
      $or: [{ fromUser: user._id },
        {
          toStore: { $in: user.stores }
        }
      ],
      createdAt: {
        $gte: from,
        $lt: to,
      },
    })
  }
}