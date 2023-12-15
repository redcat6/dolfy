import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PromoController } from './promo.controller';
import { Promo } from './promo.model';
import { PromoService } from './promo.service';
import { JwtModule } from '@nestjs/jwt';
import { Institute } from 'src/institute/institute.model';
import { UsersModule } from 'src/users/users.module';
import { InstituteModule } from 'src/institute/institute.module';

@Module({
  providers: [PromoService],
  controllers: [PromoController],
  imports: [
    SequelizeModule.forFeature([Promo, Institute]),
    JwtModule,
    UsersModule,
    InstituteModule,
  ],
  exports: [PromoService],
})
export class PromoModule {}
