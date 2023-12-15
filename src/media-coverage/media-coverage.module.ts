import { Module } from '@nestjs/common';
import { MediaCoverageController } from './media-coverage.controller';
import { MediaCoverageService } from './media-coverage.service';
import { Segment } from 'src/segment/segment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { MediaCoverage } from './media-coverage.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [MediaCoverageController],
  providers: [MediaCoverageService],
  imports: [SequelizeModule.forFeature([MediaCoverage, Segment]), JwtModule],
  exports: [MediaCoverageService],
})
export class MediaCoverageModule {}
