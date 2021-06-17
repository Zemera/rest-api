import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { citiesProviders } from '../business/orm/providers/city.provider';
import { regionProviders } from '../business/orm/providers/region.provider';
import { RegionService } from '../region/region.service';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CityController],
    providers: [...citiesProviders, ...regionProviders ,CityService,RegionService],
})
export class CityModule { }
