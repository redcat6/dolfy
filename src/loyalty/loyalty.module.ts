import { Module } from '@nestjs/common';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyService } from './loyalty.service';
import { Segment } from 'src/segment/segment.model';
import { Loyalty } from './loyalty.model';
import { Trademark } from 'src/trademark/trademark.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { MarketSegmentModule } from 'src/market-segment/market-segment.module';
import { SpotModule } from 'src/spot/spot.module';
import { ProductModule } from 'src/product/product.module';
import { AdvancedFeaturesModule } from 'src/advanced-features/advanced-features.module';

@Module({
  controllers: [LoyaltyController],
  providers: [LoyaltyService],
  imports: [
    SequelizeModule.forFeature([Loyalty, Trademark, Segment]),
    JwtModule,
    ProductModule,
    MarketSegmentModule,
    SpotModule,
    AdvancedFeaturesModule,
  ],
  exports: [LoyaltyService],
})
export class LoyaltyModule {}
