import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post } from '@nestjs/common';
import { Invoice } from 'src/business/orm/interfaces/invoice/invoice.interface';
import { StoreService } from 'src/store/store.service';
import { TransfertOrdersService } from 'src/transfert-orders/transfert-orders.service';
import { UserService } from 'src/user/user.service';
import { BaseController } from '../business/base/base.controller';
import { InvoiceService } from './invoice.service';
import {startOfDay , endOfDay} from "date-fns"
@Controller('api/v1/invoice')
export class InvoiceController extends BaseController<Invoice>{

  protected invoiceService: InvoiceService;
  protected userService: UserService;
  protected transfertOrderService: TransfertOrdersService;

  constructor(
    invoiceService: InvoiceService,
    userService: UserService,
    transfertOrderService: TransfertOrdersService,
  ) {
    super(invoiceService);
    this.invoiceService = invoiceService;
    this.transfertOrderService = transfertOrderService;
    this.userService = userService;
  }

  @Post()
  public async generateInvoiceByDate(
    @Body() payload: any,
  ): Promise<Invoice> {
    try {
      console.log("[POST] creation invoice ")

      const userFromDb = await this.userService.findById(payload.user);
      const from = startOfDay(new Date (payload.from));
      const to = endOfDay(new Date(payload.to));
      
      if(!userFromDb){
         throw new NotFoundException("User not found") ;
      }
      // get user orders
      const orders = await this.transfertOrderService.getUserOrder(userFromDb,from, to);
      
      // calculate all prices and generate invoice
      const generatedInvoice = await this.service.generateInvoice(userFromDb, orders, from, to);
    
      // create invoice
      const output = await this.service.create(generatedInvoice);

      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}