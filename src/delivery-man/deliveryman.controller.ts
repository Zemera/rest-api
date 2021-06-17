import {  Body, Controller, Post } from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { DeliveryMan } from '../business/orm/interfaces/deliveryMan/deliveryMan.interface';
import { DeliveryManService } from './deliveryman.service';
import { CreateDeliveryManDto } from './dto/createDeliveryMan.dto';

@Controller('api/v1/delivery-man')
export class DeliveryManlController extends BaseController<DeliveryMan>{
    protected regionService: DeliveryManService;

    constructor(deliveryManService:DeliveryManService) {
        super(deliveryManService);
    }

    @Post()
    public async post(@Body() newItem: CreateDeliveryManDto): Promise<DeliveryMan> {
        console.log(newItem);
        
       return super.post(newItem);
    }

}
