import { Constants } from './../business/config/Constants';
import { AuthService } from './auth.service';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      ignoreExpiration: false,
      secretOrKey: Constants.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<any> {
    const user = await this.authService.findById(payload._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
