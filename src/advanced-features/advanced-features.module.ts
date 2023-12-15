import { Module } from '@nestjs/common';
import { AdvancedFeaturesController } from './advanced-features.controller';
import { AdvancedFeaturesService } from './advanced-features.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { AdvancedFeature } from './advanced-features.model';
import { Segment } from 'src/segment/segment.model';
import { ProductModule } from 'src/product/product.module';
import { MarketSegmentModule } from 'src/market-segment/market-segment.module';
import { SpotModule } from 'src/spot/spot.module';
import { ChannelModule } from 'src/channel/channel.module';

@Module({
  controllers: [AdvancedFeaturesController],
  providers: [AdvancedFeaturesService],
  imports: [
    SequelizeModule.forFeature([AdvancedFeature, Segment]),
    JwtModule,
    ProductModule,
    MarketSegmentModule,
    SpotModule,
    ChannelModule,
  ],
  exports: [AdvancedFeaturesService],
})
export class AdvancedFeaturesModule {}
