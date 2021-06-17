import { Controller, Get } from '@nestjs/common';
import { TransferUsersService } from './transfer-users.service';

@Controller('transfer-users')
export class TransferUsersController {
  constructor(private TransferUsersServise: TransferUsersService) {}

  @Get()
  create() {
    return this.TransferUsersServise.getDataUsers();
  }
}
