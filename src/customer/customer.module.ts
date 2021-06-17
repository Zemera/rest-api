import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { customerProviders } from '../business/orm/providers/customer.provider';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [...customerProviders, CustomerService],
  exports: [...customerProviders, CustomerService],
})
export class CustomerModule {}
