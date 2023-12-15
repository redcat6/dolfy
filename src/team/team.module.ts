import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Game } from 'src/game/game.model';
import { User } from 'src/users/users.model';
import { TeamController } from './team.controller';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { JwtModule } from '@nestjs/jwt';
import { Product } from 'src/product/product.model';
import { Channel } from 'src/channel/channel.model';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [
    SequelizeModule.forFeature([Team, Game, User, Product, Channel]),
    JwtModule,
  ],
  exports: [TeamService],
})
export class TeamModule {}
