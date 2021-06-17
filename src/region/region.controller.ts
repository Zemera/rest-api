import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { Region } from '../business/orm/interfaces/region.interface';
import { CountryService } from '../country/country.service';
import { RegionService } from './region.service';

@Controller('api/v1/region')
export class RegionController extends BaseController<Region>{
    protected regionService: RegionService;
    protected countryService: CountryService;

    constructor(regionService: RegionService, countryService:CountryService) {
        super(regionService);
        this.regionService = regionService;
        this.countryService = countryService;
    }



    @Post()
    public async post(@Body() newItem: Partial<Region>): Promise<Region> {
        console.log("Post request of region controller");
        try {
            const region = newItem as Region;
            
            
            region.cities = [];
            
            const country = await this.countryService.findById(region.country);
            const newRegion = await this.regionService.create(region);

            country.regions.push(newRegion._id);
            
            const result = await this.countryService.update(country._id, country);
            return newRegion;

        } catch (error) {
            console.log(error);
            
            throw new InternalServerErrorException(error.message);
        }
    }
}
