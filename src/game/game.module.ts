import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './game.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [GameService],
  controllers: [GameController],
  imports: [SequelizeModule.forFeature([Game]), JwtModule],
  exports: [GameService],
})
export class GameModule {}
