import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Country } from '../business/orm/interfaces/country.interface';
import { CountryPaginate } from '../business/orm/schemas/country.schema';


@Injectable()
export class CountryService extends BaseService<Country>{
    constructor(@Inject(ModelEnum.CountryModel) countryModel: Model<Country>) {
        super(countryModel,CountryPaginate);
    }


    checkPaginate(): Promise<any> {
        const conditions = {};
        const page = 1 ; const limit = 10 ;
        const options = {
            perPage: 2,
            limit,
            lean: true,
            leanWithId : true,
            page,
            skip:(page - 1) * (limit),
        };

        return CountryPaginate.paginate(conditions, options)

    }
}
