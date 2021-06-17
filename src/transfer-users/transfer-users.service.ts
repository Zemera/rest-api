import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { Model } from 'mongoose';
import { Customer } from '../business/orm/interfaces/customer.interface';
import { ModelEnum } from '../business/enum/ModelEnum';
import { IOrder } from '../business/orm/interfaces/order.interface';
import { CreateOrderDTO } from './dto/CreateOrder.dto';

@Injectable()
export class TransferUsersService {
  constructor(
    @Inject(ModelEnum.CustomerModel)
    private userModel: Model<Customer>,
    @Inject(ModelEnum.OrderModel)
    private orderModel: Model<IOrder>,
  ) {}

  async getDataUsers() {
    const dataUsers = this.readFile();
    dataUsers.data.forEach(async (item) => {
      let result: any;
      try {
        const user = new CreateUserDTO(item);
        const order = new CreateOrderDTO(item);
        const createOrder = new this.orderModel(order);
        await createOrder.save();

        result = await this.checkUser(<string>user.address);
        if (result === null) {
          result = new this.userModel(user);
        }
        if (result.orders) {
          result.orders = [];
        }
        result.orders.push(createOrder._id);
        await result.save();
      } catch (e) {
        debugger;
        console.log(e.message);
        console.log(result);
      }
    });
  }

  readFile() {
    const fs = require('fs');
    const data = fs.readFileSync('./json/test.json', 'UTF8');
    return JSON.parse(data);
  }

  async checkUser(address: string): Promise<Customer> {
    try {
      const user = await this.userModel.find({ address });
      return user && user.length > 0 ? user[0] : null;
    } catch (e) {
      debugger;
      return null;
    }
  }
}
