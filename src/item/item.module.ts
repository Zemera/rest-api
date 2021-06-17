/* eslint-disable prettier/prettier */
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { itemProviders } from '../business/orm/providers/item.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [...itemProviders, ItemService],
})
export class ItemModule {}
