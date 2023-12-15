import { Module, forwardRef } from '@nestjs/common';
import { IntermediaryController } from './intermediary.controller';
import { IntermediaryService } from './intermediary.service';
import { Intermediary } from './intermediary.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { ChannelModule } from 'src/channel/channel.module';
import { ProductModule } from 'src/product/product.module';
import { SalesModule } from 'src/sales/sales.module';
import { ResourceModule } from 'src/resource/resource.module';
import { SpotModule } from 'src/spot/spot.module';

@Module({
  controllers: [IntermediaryController],
  providers: [IntermediaryService],
  imports: [
    SequelizeModule.forFeature([Intermediary]),
    JwtModule,
    ChannelModule,
    ProductModule,
    SalesModule,
    ResourceModule,
    SpotModule,
  ],
  exports: [IntermediaryService],
})
export class IntermediaryModule {}
