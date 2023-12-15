import { Module, forwardRef } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Channel } from './channel.model';
import { JwtModule } from '@nestjs/jwt';
import { Trademark } from 'src/trademark/trademark.model';
import { ChannelTrademark } from './channel-trademark.model';
import { TrademarkModule } from 'src/trademark/trademark.module';
import { ProductModule } from 'src/product/product.module';
import { ChainModule } from 'src/chain/chain.module';

@Module({
  controllers: [ChannelController],
  providers: [ChannelService],
  imports: [
    SequelizeModule.forFeature([Channel, Trademark, ChannelTrademark]),
    JwtModule,
    TrademarkModule,
    ProductModule,
    ChainModule,
  ],
  exports: [ChannelService],
})
export class ChannelModule {}
