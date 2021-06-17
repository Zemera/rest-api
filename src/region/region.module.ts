import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { Module } from '@nestjs/common';
import { CountryService } from '../country/country.service';
import { DatabaseModule } from '../business/database.module/database.module';
import { regionProviders } from '../business/orm/providers/region.provider';
import { countriesProviders } from '../business/orm/providers/country.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [
        RegionController,],
    providers: [
        ...regionProviders, 
        ...countriesProviders, 
        RegionService, 
        CountryService
    ],
})
export class RegionModule { }
