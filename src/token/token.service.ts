import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Token } from './token.model';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token)
    private tokenRepository: typeof Token,
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async generateTokens(payload: any) {
    const accessTokenConfig = {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME} m`,
    };

    const refreshTokenConfig = {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME} m`,
    };

    const accessToken = this.jwtService.sign(payload, accessTokenConfig);
    const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);

    return {
      accessToken,
      refreshToken,
    };
  }

  //save refresh token to db
  async saveToken({ userId, token }): Promise<Token> {
    const dataToken = await this.tokenRepository.findOne({
      where: { userId },
    });
    if (dataToken) {
      dataToken.token = token;
      return await dataToken.save();
    }
    const refreshToken = await this.tokenRepository.create({
      userId: userId,
      token: token,
    });
    return refreshToken;
  }

  async refreshToken(
    token: string,
  ): Promise<{ accessToken: string; refreshToken: string; user: User }> {
    const userData = this.validateRefreshToken(token);
    const data = await this.tokenRepository.findOne({
      where: { token: token },
    });
    if (!userData || !data) {
      throw new HttpException('User not authorized!', HttpStatus.UNAUTHORIZED);
    }
    //user verifcation
    const user = await this.userService.getUserById(data.userId);

    if (!user) {
      throw new HttpException('User not authorized!', HttpStatus.UNAUTHORIZED);
    }
    const tokens = this.generateTokens({ id: user.id, role: user.role });
    data.token = (await tokens).refreshToken;
    await data.save();
    return {
      accessToken: (await tokens).accessToken,
      refreshToken: (await tokens).refreshToken,
      user: user,
    };
  }

  //delete refresh token from db
  async removeToken(refreshToken: string): Promise<Token> {
    const token = await this.tokenRepository.findOne({
      where: { token: refreshToken },
    });
    if (token) {
      await token.destroy();
    }
    return token;
  }

  async validateAccessToken(token: string) {
    try {
      const userData = await this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      });
      return userData;
    } catch (error) {
      return null;
    }
  }

  async validateRefreshToken(token: string) {
    try {
      const userData = await this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      });
      return userData;
    } catch (error) {
      return null;
    }
  }
}
