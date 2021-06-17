import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Query,
  Req,
  Request,
  UseGuards
} from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { TransfertOrders } from '../business/orm/interfaces/transfertOrder.interface';
import { DeliveryAddressService } from './delivery-address.service';
import { ItemService } from './item.service';
import { RecipientService } from './recipient.service';
import { TransfertOrdersService } from './transfert-orders.service';

@Controller('api/v1/transfert-orders')
export class TransfertOrdersController extends BaseController<TransfertOrders> {
  private itemService: ItemService;
  private RecipientService: RecipientService;
  private DeliveryService: DeliveryAddressService;
  constructor(
    service: TransfertOrdersService,
    itemService: ItemService,
    RecipientService: RecipientService,
    DeliveryService: DeliveryAddressService,
  ) {
    super(service);
    this.itemService = itemService;
    this.RecipientService = RecipientService;
    this.DeliveryService = DeliveryService;
  }

//  @UseGuards(JwtAuthGuard)
  @Post()
  public async posta(@Request() req, @Body() order: any): Promise<TransfertOrders> {
    try {
      // const item = await this.itemService.create(order.items);
      const deliveryAddress = await this.DeliveryService.create(order.deliveryAddress);
      const recipient = await this.RecipientService.create(order.recipient);

      // order.item = item._id;
      order.address = deliveryAddress._id;
      order.recipient = recipient._id;
      
      // calculate price (items prices + delivery price)
      if(Array.isArray(order.orderItems)){
        let cpt = 0 ;
          const items =  await order.orderItems.map((item) => {
            cpt+= item.price ;
          });
        order =  ( order as TransfertOrders)
        order.price =  cpt +  (order.delivery.deliveryPrice || 0);
      }

      const output = await this.service.create(order);
      return output;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(error.message);
    }
  }

  @Get()
  public async findAll(@Query('page') page: string): Promise<TransfertOrders[]> {
    try {
      if (page) {
        this.service.optionPaginate.page = parseInt(page);
        return this.service.retriveWithPaginate();
      }
      const output: any = await (this.service.retrieve() as any)
      .populate("fromUser")
      .populate("toStore");
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }


  @UseGuards(JwtAuthGuard)
  @Get('/by-type/:type')
  public async getOrders(@Req() req: Request, @Param('type') type: string): Promise<TransfertOrders[]> {
    try {
      if (type === 'incoming') {
        //this.service.optionPaginate.page = parseInt(page);
        return this.service.incomingOrders((req as any).user).populate("fromUser")
        .populate("toStore");
      } else if(type === 'passed') {
        return this.service.passedOrders((req as any).user).populate("fromUser")
        .populate("toStore");
      }
      // const output: any = await (this.service.retrieve() as any)
      // .populate("fromUser")
      // .populate("toStore") ;
      // return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}
