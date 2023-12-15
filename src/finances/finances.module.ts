import { Module } from '@nestjs/common';
import { FinancesController } from './finances.controller';
import { FinancesService } from './finances.service';
import { Finances } from './finances.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { ProductModule } from 'src/product/product.module';
import { SalesModule } from 'src/sales/sales.module';
import { PromotionModule } from 'src/promotion/promotion.module';
import { ResourceModule } from 'src/resource/resource.module';
import { IntermediaryModule } from 'src/intermediary/intermediary.module';

@Module({
  controllers: [FinancesController],
  providers: [FinancesService],
  imports: [
    SequelizeModule.forFeature([Finances]),
    JwtModule,
    ProductModule,
    SalesModule,
    PromotionModule,
    ResourceModule,
    IntermediaryModule,
  ],
  exports: [FinancesService],
})
export class FinancesModule {}
