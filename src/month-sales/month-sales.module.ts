import { Module } from '@nestjs/common';
import { MonthSalesController } from './month-sales.controller';
import { MonthSalesService } from './month-sales.service';
import { MonthSales } from './month-sales.model';
import { Trademark } from 'src/trademark/trademark.model';
import { Segment } from 'src/segment/segment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { ProductModule } from 'src/product/product.module';
import { MarketSegmentModule } from 'src/market-segment/market-segment.module';
import { SpotModule } from 'src/spot/spot.module';
import { AdvancedFeaturesModule } from 'src/advanced-features/advanced-features.module';
import { ChannelModule } from 'src/channel/channel.module';
import { AwarenessModule } from 'src/awareness/awareness.module';
import { LoyaltyModule } from 'src/loyalty/loyalty.module';
import { PromotionModule } from 'src/promotion/promotion.module';

@Module({
  controllers: [MonthSalesController],
  providers: [MonthSalesService],
  imports: [
    SequelizeModule.forFeature([MonthSales, Trademark, Segment]),
    JwtModule,
    ProductModule,
    MarketSegmentModule,
    SpotModule,
    ChannelModule,
    AdvancedFeaturesModule,
    AwarenessModule,
    LoyaltyModule,
    PromotionModule,
  ],
  exports: [MonthSalesService],
})
export class MonthSalesModule {}
