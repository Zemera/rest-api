import {
  Body,
  Controller,
  Delete,
  InternalServerErrorException,
  Param,
  Post,
  Get,
} from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { City } from '../business/orm/interfaces/city.interface';
import { RegionService } from '../region/region.service';
import { CityService } from './city.service';

@Controller('api/v1/city')
export class CityController extends BaseController<City> {
  protected regionService: RegionService;

  constructor(cityService: CityService, regionService: RegionService) {
    super(cityService);
    this.regionService = regionService;
  }

  @Post()
  public async post(@Body() newItem: Partial<City>): Promise<City> {
    console.log('Post request of city controller');
    try {
      const city = newItem as City;

      const region = await this.regionService.findById(city.region as string);

      if (!city.country) {
        city.country = region.country;
      }
      const newCity = await this.service.create(city);
      region.cities.push(newCity._id);
      const result = await this.regionService.update(region._id, region);

      return newCity;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<any> {
    console.log('Delete request of city controller');
    try {
      const city = await this.service.delete(id);
      const region = await this.regionService.findByCityId(id);
      const index = region.cities.indexOf(id);
      if (index > -1) {
        region.cities.splice(index, 1);
        await this.regionService.update(region._id, region);
      }
      return city;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('clean')
  public async cleanStores(): Promise<City[]> {
    let cities = await this.service.retrieve();
    cities.forEach(async (city) => {
      city.seo = null;
      city.description = null;
      city.itemCount = null;
      city.averagePrice = null;
      await city.save();
    });
    return this.service.retrieve();
  }
}
