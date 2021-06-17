/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { CustomerService } from './customer.service';

@Controller('api/v1/customer')
export class CustomerController extends BaseController<CustomerService>{
  
    constructor( service: CustomerService){
        super(service)
    }
}
