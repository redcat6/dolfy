import { Module } from '@nestjs/common';
import { MarketSegmentController } from './market-segment.controller';
import { MarketSegmentService } from './market-segment.service';
import { MarketSegment } from './market-segment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Segment } from 'src/segment/segment.model';
import { ChainModule } from 'src/chain/chain.module';
import { ChannelModule } from 'src/channel/channel.module';
import { ProductModule } from 'src/product/product.module';
import { SpotModule } from 'src/spot/spot.module';

@Module({
  controllers: [MarketSegmentController],
  providers: [MarketSegmentService],
  imports: [
    SequelizeModule.forFeature([MarketSegment, Segment]),
    JwtModule,
    ChainModule,
    ChannelModule,
    ProductModule,
    SpotModule,
  ],
  exports: [MarketSegmentService],
})
export class MarketSegmentModule {}
