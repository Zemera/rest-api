import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { citiesProviders } from '../business/orm/providers/city.provider';
import { CityService } from '../city/city.service';
import { usersProviders } from '../business/orm/providers/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersProviders, ...citiesProviders, UserService, CityService],
  exports: [UserService],
})
export class UserModule {}
