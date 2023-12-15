import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { SegmentController } from './segment.controller';
import { SegmentService } from './segment.service';
import { Segment } from './segment.model';
import { MarketSegment } from 'src/market-segment/market-segment.model';

@Module({
  controllers: [SegmentController],
  providers: [SegmentService],
  imports: [SequelizeModule.forFeature([Segment, MarketSegment]), JwtModule],
  exports: [SegmentService],
})
export class SegmentModule {}
