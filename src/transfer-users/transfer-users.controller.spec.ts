import { Test, TestingModule } from '@nestjs/testing';
import { TransferUsersController } from './transfer-users.controller';

describe('TransferUsers Controller', () => {
  let controller: TransferUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferUsersController],
    }).compile();

    controller = module.get<TransferUsersController>(TransferUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
