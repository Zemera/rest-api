import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Module } from '@nestjs/common';
import { storesProviders } from '../business/orm/providers/store.provider';
import { DatabaseModule } from '../business/database.module/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StoreController],
  providers: [...storesProviders, StoreService],
})
export class StoreModule {}
