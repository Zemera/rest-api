/* eslint-disable prettier/prettier */
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import {diskStorage} from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { BaseController } from '../business/base/base.controller';
import { Item } from '../business/orm/interfaces/item';
import { ItemService } from './item.service';
import {v4 as uuidv4} from 'uuid';

@Controller('api/v1/item')
export class ItemController extends BaseController<Item> {
  protected itemService: ItemService;
  constructor(itemService: ItemService) {
    super(itemService);
    this.itemService = itemService;
  }

  @Get('clean')
  public async cleanStores(): Promise<Item[]> {
    let items = await this.service.retrieve();
    items.forEach(async (item) => {
      item.seo = null;
      item.description = null;
      item.inStock = null;
      item.rate = null;
      item.dayDeal = null;
      item.recommended = null;
      await item.save();
    });
    return this.service.retrieve();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: function(req, file, cb) {
        let tmp = file.originalname.split('.');
        cb(null, `${uuidv4()}.${tmp[tmp.length-1]}`);
      }
  })}))
  public async uploadFile(@UploadedFile() file) {
    return file;
  }
}
