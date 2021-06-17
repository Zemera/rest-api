import { Module } from '@nestjs/common';
import { DatabaseModule } from '../business/database.module/database.module';
import { citiesProviders } from '../business/orm/providers/city.provider';
import { deliveryManProvider } from '../business/orm/providers/delivery-man.provider';
import { DeliveryManlController } from './deliveryman.controller';
import { DeliveryManService } from './deliveryman.service';

@Module({
    imports: [DatabaseModule],
    controllers: [DeliveryManlController],
    providers: [...citiesProviders, ...deliveryManProvider, DeliveryManService],
})
export class DeliveryManModule { }
