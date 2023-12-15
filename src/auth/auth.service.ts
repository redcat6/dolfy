import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  private SALT = 10;
  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    /* if (!user.isActivated) {
      throw new HttpException(
        `Activate, please, your account by link in email: ${userDto.email}`,
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    } */
    //tokens generation
    const payload = { id: user.id, role: user.role };
    const tokens = await this.tokenService.generateTokens(payload);

    //save refresh token to db
    const tokenDto = {
      userId: user.id,
      token: tokens.refreshToken,
    };

    await this.tokenService.saveToken(tokenDto);
    return { ...tokens, user: user };
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        `user with email: ${userDto.email} exists already`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, this.SALT);
    //activation link to email (uuidv4)
    //const activationLink = uuid();

    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    //send activationLink to user
    //this.mailService.sendMail(userDto.email, userDto.name, activationLink);

    //tokens generation
    const payload = { id: user.id, role: user.role };
    const tokens = await this.tokenService.generateTokens(payload);

    //save refresh token to db
    const tokenDto = {
      userId: user.id,
      token: tokens.refreshToken,
    };
    await this.tokenService.saveToken(tokenDto);

    //activate promocode

    return { ...tokens, user: user };
  }

  async logout(refreshToken: string) {
    return await this.tokenService.removeToken(refreshToken);
  }

  private async validateUser(userDto: LoginUserDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'User not found. Sign up, please',
      });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }
}
