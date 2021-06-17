import { TransfertOrdersService } from './transfert-orders.service';
import { TransfertOrdersController } from './transfert-orders.controller';
import { Module } from '@nestjs/common';
import { tranfertOrderProviders } from '../business/orm/providers/transfert-order.provider';
import { deliveryAddressProviders } from '../business/orm/providers/delivery-address.provider';
import { itemProviders } from '../business/orm/providers/item.provider';
import { recipientProviders } from '../business/orm/providers/recipient.provider';
import { RecipientService } from './recipient.service';
import { ItemService } from './item.service';
import { DeliveryAddressService } from './delivery-address.service';
import { DatabaseModule } from '../business/database.module/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TransfertOrdersController],
  providers: [
    ...tranfertOrderProviders,
    ...deliveryAddressProviders,
    ...itemProviders,
    ...recipientProviders,
    RecipientService,
    ItemService,
    DeliveryAddressService,
    TransfertOrdersService,
  ],
})
export class TransfertOrdersModule {}
