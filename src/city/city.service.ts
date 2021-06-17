import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { City } from '../business/orm/interfaces/city.interface';
import { CityPaginate } from '../business/orm/schemas/city.schema';

@Injectable()
export class CityService extends BaseService<City> {

    constructor(@Inject(ModelEnum.CityModel) protected model: Model<City>){
        super(model, CityPaginate);
    }
    
 }
