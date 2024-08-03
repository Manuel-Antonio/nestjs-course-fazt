import { HttpCode, HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Desde AuthMiddleware")
    const {authorization} = req.headers;

    if(!authorization) {
      throw new HttpException("No autorizado", HttpStatus.UNAUTHORIZED)
    }
    if(authorization !== "xyz123") {
      throw new HttpException("Prohibido autenticacion invalida", HttpStatus.FORBIDDEN)
    }

    next();
  }
}
