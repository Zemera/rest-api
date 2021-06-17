import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Item } from '../business/orm/interfaces/item';
import { ItemPaginate } from '../business/orm/schemas/item.schema';

@Injectable()
export class ItemService extends BaseService<Item> {
    constructor(@Inject(ModelEnum.ItemModel) protected model: Model<Item>) {
      super(model, ItemPaginate);
    }
}
