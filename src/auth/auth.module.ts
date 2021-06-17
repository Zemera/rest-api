/* eslint-disable prettier/prettier */
import { Constants } from './../business/config/Constants';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.JWT_SECRET,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService, JWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}
