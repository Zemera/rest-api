import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { countriesProviders } from '../business/orm/providers/country.provider';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        CountryController,],
    providers: [
        ...countriesProviders,
        CountryService,],
})
export class CountryModule { }
