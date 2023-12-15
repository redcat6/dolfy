import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sales } from './sales.model';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
import { JwtModule } from '@nestjs/jwt';
import { MonthSalesModule } from 'src/month-sales/month-sales.module';
import { ProductModule } from 'src/product/product.module';
import { ChannelModule } from 'src/channel/channel.module';
import { PromotionModule } from 'src/promotion/promotion.module';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [
    SequelizeModule.forFeature([Sales, Team, Trademark]),
    JwtModule,
    ChannelModule,
    ProductModule,
    PromotionModule,
    MonthSalesModule,
  ],
  exports: [SalesService],
})
export class SalesModule {}
