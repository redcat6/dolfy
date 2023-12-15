import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenModule } from 'src/token/token.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule), TokenModule],
  exports: [AuthService],
})
export class AuthModule {}
