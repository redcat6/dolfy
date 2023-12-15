import { Module } from '@nestjs/common';
import { TrademarkController } from './trademark.controller';
import { TrademarkService } from './trademark.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trademark } from './trademark.model';
import { Product } from 'src/product/product.model';
import { JwtModule } from '@nestjs/jwt';
import { Channel } from 'src/channel/channel.model';
import { ChannelTrademark } from 'src/channel/channel-trademark.model';

@Module({
  controllers: [TrademarkController],
  providers: [TrademarkService],
  imports: [
    SequelizeModule.forFeature([Trademark, Product, Channel, ChannelTrademark]),
    JwtModule,
  ],
  exports: [TrademarkService],
})
export class TrademarkModule {}
