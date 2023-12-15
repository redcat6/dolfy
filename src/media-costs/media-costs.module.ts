import { Module } from '@nestjs/common';
import { MediaCostsController } from './media-costs.controller';
import { MediaCostsService } from './media-costs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MediaCosts } from './media-costs.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [MediaCostsController],
  providers: [MediaCostsService],
  imports: [SequelizeModule.forFeature([MediaCosts]), JwtModule],
  exports: [MediaCostsService],
})
export class MediaCostsModule {}
