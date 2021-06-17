import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { invoiceProviders } from 'src/business/orm/providers/invoice.provider';
import { tranfertOrderProviders } from 'src/business/orm/providers/transfert-order.provider';
import { usersProviders } from 'src/business/orm/providers/user.provider';
import { UserService } from 'src/user/user.service';
import { TransfertOrdersService } from 'src/transfert-orders/transfert-orders.service';

@Module({
    imports: [DatabaseModule],
    controllers: [
        InvoiceController,],
    providers: [
        ...invoiceProviders,
        ...usersProviders,
        ...tranfertOrderProviders,
        UserService,
        TransfertOrdersService,
        InvoiceService],
})
export class InvoiceModule { }
