import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { User } from 'src/users/users.model';
import { Roles } from './roles-auth.decorator';

@ApiTags('Authorization')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(
    @Body() userDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ accessToken: string; refreshToken: string; user: User }> {
    const data = await this.authService.login(userDto);

    //set refreshtoken to cookies
    const refreshToken = data.refreshToken;
    const age =
      Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
    res.cookie('jwt', refreshToken, {
      maxAge: age,
      httpOnly: true,
      secure: false,
    });
    return data;
  }

  @Post('auth/logup')
  async registration(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ accessToken: string; refreshToken: string; user: User }> {
    try {
      const data = await this.authService.registration(userDto);
      const refreshToken = data.refreshToken;
      const age =
        Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
      res.cookie('jwt', refreshToken, {
        maxAge: age,
        httpOnly: true,
        secure: false,
      });
      return data;
    } catch (err) {
      throw new HttpException(
        `Auth error: ${err.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({ summary: 'create user (team) by professor' })
  @ApiResponse({ status: 200, type: User })
  @Roles('PROFESSOR')
  @Post('auth/createUser')
  async createUser(
    @Body() userDto: CreateUserDto,
  ): Promise<{ accessToken: string; refreshToken: string; user: User }> {
    try {
      const data = await this.authService.registration(userDto);
      return data;
    } catch (err) {
      throw new HttpException(
        `Auth error: ${err.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('auth/logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    try {
      const refreshToken = req.cookies['jwt'];
      await this.authService.logout(refreshToken);
      res.clearCookie('jwt', {
        domain: process.env.FRONTEND_DOMAIN,
        path: '/',
      });
      return 'user logout';
    } catch (error) {
      throw new HttpException('Authentication error', HttpStatus.BAD_REQUEST);
    }
  }
}
