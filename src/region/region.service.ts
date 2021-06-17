import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Region } from '../business/orm/interfaces/region.interface';
import { RegionPaginate } from '../business/orm/schemas/region.schema';

@Injectable()
export class RegionService  extends BaseService<Region> {

    constructor(@Inject(ModelEnum.RegionModel) protected model: Model<Region>){
        super(model, RegionPaginate);
    }
    
    public findByCityId(cityID: string): Promise<Region>{
        const id = new Types.ObjectId(cityID);
        return this._model.findOne({cities: id});
    }
 }
