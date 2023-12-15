import { Module, forwardRef } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './token.model';
import { User } from 'src/users/users.model';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TokenController],
  providers: [TokenService],
  imports: [
    SequelizeModule.forFeature([Token, User]),
    JwtModule.register({}),
    forwardRef(() => UsersModule),
  ],
  exports: [TokenService, JwtModule],
})
export class TokenModule {}
 