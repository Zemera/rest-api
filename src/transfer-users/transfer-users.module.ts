import { Module } from '@nestjs/common';
import { TransferUsersService } from './transfer-users.service';
import { TransferUsersController } from './transfer-users.controller';

import { DatabaseModule } from '../business/database.module/database.module';
import { ordersProviders } from '../business/orm/providers/order.provider';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [DatabaseModule, CustomerModule],
  providers: [...ordersProviders, TransferUsersService],
  controllers: [TransferUsersController],
})
export class TransferUserModule {}
