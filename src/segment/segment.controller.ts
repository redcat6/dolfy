import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateSegmentDto } from '../segment/dto/create-segment.dto';
import { Segment } from '../segment/segment.model';
import { SegmentService } from './segment.service';

@ApiTags('Segment')
@Controller('segment')
export class SegmentController {
  constructor(private segmentService: SegmentService) {}

  @ApiOperation({ summary: 'a new segment creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createSegment(@Body() dto: CreateSegmentDto): Promise<Segment> {
    return this.segmentService.createSegment(dto);
  }

  @ApiOperation({ summary: 'get all segments' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: [Segment] })
  @Get()
  getSegments(): Promise<Segment[]> {
    return this.segmentService.getAll();
  }

  @ApiOperation({ summary: 'get all segments by category' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: [Segment] })
  @Get('/:category')
  getSegmentsbyCategory(
    @Param('category') category: string,
  ): Promise<Segment[]> {
    return this.segmentService.getByCategory(category);
  }

  @ApiOperation({ summary: 'edit segment by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/:id')
  updateSegment(@Body() segment: CreateSegmentDto, @Param('id') id: number) {
    return this.segmentService.updateSegment(id, segment);
  }

  @ApiOperation({ summary: 'delete segment by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteSegment(@Param('id') id: number): Promise<number> {
    return this.segmentService.removeById(id);
  }
}
