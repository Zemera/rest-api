
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthoGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {

    const host = context.switchToHttp(),
      request = host.getRequest();

    // Get user from AuthMidlleware
    const user = request['user'];
    if (!user) {
      console.log('User not authenticated, access denied');
      throw new UnauthorizedException();
    }

    return true ;
  }
}
