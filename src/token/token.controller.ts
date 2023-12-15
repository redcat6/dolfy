import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('/refresh')
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const refresh = req.cookies['jwt'];

      if (!refresh) {
        throw new HttpException(
          'User is not authorized!',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const data = await this.tokenService.refreshToken(refresh);
      //set new cookie

      const age =
        Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
      res.cookie('jwt', data.refreshToken, {
        maxAge: age,
        httpOnly: true,
        secure: false,
      });
      return data; //{ refreshToken, accessToken, user }
    } catch (error) {
      throw new UnauthorizedException({ message: 'User is unauthorized!' });
    }
  }
}
