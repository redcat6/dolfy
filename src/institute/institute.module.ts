import { Module } from '@nestjs/common';
import { InstituteController } from './institute.controller';
import { InstituteService } from './institute.service';
import { Institute } from './institute.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Promo } from 'src/promo/promo.model';

@Module({
  controllers: [InstituteController],
  providers: [InstituteService],
  imports: [SequelizeModule.forFeature([Institute, Promo]), JwtModule],
  exports: [InstituteService],
})
export class InstituteModule {}
