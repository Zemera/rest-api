/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Store } from '../business/orm/interfaces/store.interface';
import { StorePaginate } from '../business/orm/schemas/store.schema';

@Injectable()
export class StoreService extends BaseService<Store> {

    constructor(@Inject(ModelEnum.StoreModel) private model: Model<Store>) {
        super(model, StorePaginate);
    }

    public async findByCity(id: string): Promise<Store[]> {
        return this.model.find({ "delivery.city": id })
    }
    public async findByUser(id: string): Promise<Store[]> {
        return this.model.find({ "user": id })
    }
  // constructor(@Inject(ModelEnum.StoreModel) private model: Model<Store>) {
  //   super(model, StorePaginate);
  // }
}
