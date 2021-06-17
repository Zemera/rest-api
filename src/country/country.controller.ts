import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { Country } from '../business/orm/interfaces/country.interface';
import { CountryService } from './country.service';

@Controller('api/v1/country')
export class CountryController extends BaseController<Country>{

    protected countryService: CountryService;

    constructor(countryService: CountryService) {
        super(countryService);
        this.countryService = countryService;
    }
    
    @Get('/paginate')
    async paginate():Promise<any>{
        const result = await this.countryService.retriveWithPaginate();
        return result ;
    }

    
}