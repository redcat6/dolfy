import { Module } from '@nestjs/common';
import { ChainController } from './chain.controller';
import { ChainService } from './chain.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chain } from './chain.model';
import { JwtModule } from '@nestjs/jwt';
import { MarketSegment } from 'src/market-segment/market-segment.model';

@Module({
  controllers: [ChainController],
  providers: [ChainService],
  imports: [SequelizeModule.forFeature([Chain, MarketSegment]), JwtModule],
  exports: [ChainService],
})
export class ChainModule {}
