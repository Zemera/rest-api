import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { DeliveryType } from '../business/enum/DeliveryType';
import { ModelEnum } from '../business/enum/ModelEnum';
import { DeliveryAddress } from '../business/orm/interfaces/DeliveryAddress';
import { DeliveryAddressPaginate } from '../business/orm/schemas/delivery-address.schema';
@Injectable()
export class DeliveryAddressService extends BaseService<DeliveryAddress> {
  constructor(
    @Inject(ModelEnum.DeliveryAddressModel)
    protected model: Model<DeliveryAddress>,
  ) {
    super(model, DeliveryAddressPaginate);
  }
}
