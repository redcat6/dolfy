import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Game } from 'src/game/game.model';
import { GameModule } from 'src/game/game.module';
import { Team } from 'src/team/team.model';
import { TeamModule } from 'src/team/team.module';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { Token } from 'src/token/token.model';
import { TokenModule } from 'src/token/token.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Game, Team, Token]),
    forwardRef(() => AuthModule),
    TokenModule,
    GameModule,
    TeamModule,
  ],
  exports: [UsersService, AuthModule],
})
export class UsersModule {}
