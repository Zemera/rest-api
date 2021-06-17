import { Injectable, Inject} from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { DeliveryMan } from '../business/orm/interfaces/deliveryMan/deliveryMan.interface';
import { deliveryManPagination } from '../business/orm/schemas/deliveryMan/deliveryMan.schema';

@Injectable()
export class DeliveryManService extends BaseService<DeliveryMan> {
    constructor(@Inject(ModelEnum.DeliveryManModel) private model : Model<DeliveryMan> ){
        super(model,deliveryManPagination)
    }
 }
