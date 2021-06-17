import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Constants } from 'src/business/config/Constants'

@Injectable()
export class AuthoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void ) {

    // Get user authorization
    const authJwebToken = req.headers.authorization;

    console.log(authJwebToken);
    
    if (!authJwebToken) {
      next();
      return;
    }
    try {

      // Checking if the token sended by user is valid
      const user = jwt.verify(authJwebToken, Constants.JWT_SECRET);

      if (user) {
        // Pass user in req array , it will be use in Guards
        req['user'] = user;
      
      }

    } catch (error) {

    }
    next();

  }
}
