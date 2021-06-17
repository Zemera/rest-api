import { JwtAuthGuard } from './../auth/jwt-auth.guard';
/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { BaseController } from '../business/base/base.controller';
import { Constants } from '../business/config/Constants';
import { User } from '../business/orm/interfaces/user.interface';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Controller('api/v1/user')
export class UserController extends BaseController<User> {
  protected userService: UserService;

  constructor(userService: UserService) {
    super(userService);

    this.userService = userService;
  }

 //  @UseGuards(JwtAuthGuard)
  @Post('/change-password')
  public async changePassword(@Body('password') password: string,
    @Body('newPassword') newPassword: string, @Body('email') username: string) {
    console.log("Post request of user controller");
    try {
      let user = await this.service.findByEmail(username);
      if (!user) {
        throw new UnauthorizedException('User not exist')
      }

      console.log(password);

      const isMatch = await user.comparePassword(password, user.password);
      console.log(isMatch);

      if (isMatch) {
        user.password = await user.hashPasswordMethod(newPassword);

        const id = user._id;
        delete user._id;
        user = await this.service.update(id, user);
        user.password = "";

        let token = jwt.sign(user.toObject(), Constants.JWT_SECRET, { expiresIn: Constants.JWT_EXPAIRE_TIME });
        return { token: "JWT " + token, user: user };
      } else {
        throw new UnauthorizedException('Password not correct');
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async findAll(@Query('page') page: string): Promise<User[]> {
    return super.findAll(page);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  public async findOne(@Param('id') id: string): Promise<User> {
    const user = await (this.service.findById(id) as any);
    if (!user) {
      throw new NotFoundException("user not exist");
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async put(
    @Body() updateItem: Partial<User>,
    @Param() param: { id: string },
  ): Promise<User> {
    return super.put(updateItem, param);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<any> {
    return super.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async post(@Body() newItem: any): Promise<User> {
    try {
      if (newItem.rePassword !== newItem.password) {
        throw new BadRequestException("Password not match");
      }
      const user = (newItem as User);
      const output = await this.service.create(user);
      return output;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}