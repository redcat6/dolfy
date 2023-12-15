import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
import { TrademarkModule } from 'src/trademark/trademark.module';
import { MarketSegment } from 'src/market-segment/market-segment.model';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    SequelizeModule.forFeature([Product, Team, Trademark, MarketSegment]),
    JwtModule,
    TrademarkModule,
  ],
  exports: [ProductService],
})
export class ProductModule {}
