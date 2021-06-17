import {
  Controller,
  Get,
  Inject,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseController } from '../business/base/base.controller';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Store } from '../business/orm/interfaces/store.interface';
import { StoreService } from './store.service';

@Controller('/store')
export class StoreController extends BaseController<Store>{
  protected storeService: StoreService;
  constructor(storeService: StoreService) {
    super(storeService);
    this.storeService = storeService;
  }

  @Get('city')

  public async findByCity(@Query('id') id: string): Promise<Store[]> {
    try {
      const output: any = await this.storeService.findByCity(id);
      return output;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

}
// @Controller('api/v1/store')
// export class StoreController extends BaseController<Store> {
//   constructor(
//     storeService: StoreService,
//     @Inject(ModelEnum.StoreModel) private model: Model<Store>,
//   ) {
//     super(storeService);
//   }

//   @Get('city')
//   public async findByCity(@Query('id') id: string): Promise<Store[]> {
//     try {
//       const output: any = await new Promise(async (resolve, reject) => {
//         this.model
//           .find({ delivery: { $elemMatch: { city: id } } })
//           .then((data: any[]) => {
//             if (data.length === 0)
//               throw new NotFoundException('City not found');
//             resolve(data);
//           })
//           .catch((error) => {
//             if (error) {
//               reject(error);
//             }
//           });
//       });
//       return output;
//     } catch (error) {
//       throw new NotFoundException('City not found');
//     }
//   }

//   @Get('clean')
//   public async cleanStores(): Promise<Store[]> {
//     let stores = await this.service.retrieve();
//     stores.forEach(async (store) => {
//       store.seo = null;
//       store.description = null;
//       store.message = null;
//       store.adminMessage = null;
//       await store.save();
//     });

//     return this.service.retrieve();
//   }
// }
