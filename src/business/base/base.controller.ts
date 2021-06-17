import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller()
export class BaseController<T> {
  service: any;

  constructor(_service: any) {
    this.service = _service;
  }

  @Get()
  public async findAll(@Query('page') page: string): Promise<T[]> {
    try {
      if (page) {
        this.service.optionPaginate.page = parseInt(page);
        return this.service.retriveWithPaginate();
      }
      const output: any = await new Promise(async (resolve, reject) => {
        this.service
          .retrieve()
          .then((data: any) => {
            resolve(data);
          })
          .catch(error => {
            if (error) {
              reject(error);
            }
          });
      });
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string): Promise<T> {
    try {
      const output: any = await this.service.findById(id);
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post()
  public async post(@Body() newItem: Partial<T>): Promise<T> {
    try {
      const output = await this.service.create(newItem);
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Put(':id')
  public async put(
    @Body() updateItem: Partial<T>,
    @Param() param: { id: string },
  ): Promise<T> {
    try {
      const output = await this.service.update(param.id, updateItem);
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<any> {
    try {
      const output = await this.service.delete(id);
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
