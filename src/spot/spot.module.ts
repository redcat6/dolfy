import { Module } from '@nestjs/common';
import { SpotController } from './spot.controller';
import { SpotService } from './spot.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Spot } from './spot.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [SpotController],
  providers: [SpotService],
  imports: [SequelizeModule.forFeature([Spot]), JwtModule],
  exports: [SpotService],
})
export class SpotModule {}
