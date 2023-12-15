import { Module } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { Resource } from './resource.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService],
  imports: [SequelizeModule.forFeature([Resource]), JwtModule],
  exports: [ResourceService],
})
export class ResourceModule {}
