import { Module } from '@nestjs/common';
import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';
import { Promotion } from './promotion.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [PromotionController],
  providers: [PromotionService],
  imports: [SequelizeModule.forFeature([Promotion]), JwtModule],
  exports: [PromotionService],
})
export class PromotionModule {}
