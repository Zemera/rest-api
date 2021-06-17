import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Recipient } from '../business/orm/interfaces/recipient';
import { RecipientPaginate } from '../business/orm/schemas/recipient.schema';

@Injectable()
export class RecipientService extends BaseService<Recipient> {
    constructor(@Inject(ModelEnum.RecipientModel) protected model: Model<Recipient>) {
      super(model, RecipientPaginate);
    }
}