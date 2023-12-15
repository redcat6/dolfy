import { Module } from '@nestjs/common';
import { AwarenessController } from './awareness.controller';
import { AwarenessService } from './awareness.service';
import { Awareness } from './awareness.model';
import { Trademark } from 'src/trademark/trademark.model';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChannelModule } from 'src/channel/channel.module';
import { MarketSegmentModule } from 'src/market-segment/market-segment.module';
import { SpotModule } from 'src/spot/spot.module';

@Module({
  controllers: [AwarenessController],
  providers: [AwarenessService],
  imports: [
    SequelizeModule.forFeature([Awareness, Trademark]),
    JwtModule,
    ChannelModule,
    MarketSegmentModule,
    SpotModule,
  ],
  exports: [AwarenessService],
})
export class AwarenessModule {}
