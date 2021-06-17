
import { DeliveryManModule } from './delivery-man/deliveryman.module';
import { ItemController } from './item/item.controller';

import { ItemModule } from './item/item.module';

import { TransfertOrdersModule } from './transfert-orders/transfert-orders.module';
import { UserModule } from './user/user.module';
import { RegionModule } from './region/region.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { StoreModule } from './store/store.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TransferUserModule } from './transfer-users/transfer-users.module';
import { StoreController } from './store/store.controller';
import { RegionController } from './region/region.controller';
import { CountryController } from './country/country.controller';
import { CityController } from './city/city.controller';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { InvoiceModule} from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import * as cors from 'cors';
import * as helmet from 'helmet';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING ||
      'mongodb://localhost:27017/kora',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    TransferUserModule,
    RegionModule,
    CountryModule,
    CityModule,
    StoreModule,
    ItemModule,
    AuthModule,
    UserModule,
    TransfertOrdersModule,
    CustomerModule,
    DeliveryManModule,
    InvoiceModule,
  ],
  controllers: [
     AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors(), helmet())
      .forRoutes(
        StoreController,
        RegionController,
        CountryController,
        CityController,
        UserController,
        ItemController,
      );
  }
}
