/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseService } from '../business/base/base.service';
import { ModelEnum } from '../business/enum/ModelEnum';
import { Customer } from '../business/orm/interfaces/customer.interface';
import { CustomerPaginate } from '../business/orm/schemas/customer.schema';

@Injectable()
export class CustomerService  extends BaseService<Customer> {
    constructor(@Inject(ModelEnum.CustomerModel) protected model: Model<Customer>) {
      super(model, CustomerPaginate);
    }
}
