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
  Query,
  UseGuards,
} from '@nestjs/common';
import { MarketSegmentService } from './market-segment.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMarketSegmentDto } from './dto/create-market-segment.dto';
import { MarketSegment } from './market-segment.model';

@Controller('market-segment')
export class MarketSegmentController {
  constructor(private marketSegmentService: MarketSegmentService) {}

  @ApiOperation({ summary: 'a new market info about segment creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createSegment(@Body() dto: CreateMarketSegmentDto): Promise<MarketSegment> {
    return this.marketSegmentService.createMarketSegment(dto);
  }

  @ApiOperation({ summary: 'calculating the segments actual peak size' })
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Get('/actualSize/:game_id?')
  actualSizeCalculating(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MarketSegment[]> {
    return this.marketSegmentService.calculateActualSize(game_id, round);
  }

  @ApiOperation({ summary: 'get all market info about segments' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: [MarketSegment] })
  @Get()
  getSegments(): Promise<MarketSegment[]> {
    return this.marketSegmentService.getAll();
  }

  @ApiOperation({
    summary: 'transition segments by game & round',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  getByGame(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.marketSegmentService.roundTransition(game_id, round);
  }

  @ApiOperation({
    summary: 'get all market info about segments by game & round',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/:game_id?')
  segmentsTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MarketSegment[]> {
    return this.marketSegmentService.getByGameRound(game_id, round);
  }

  @ApiOperation({ summary: 'edit market info about segment by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/:id')
  updateSegment(
    @Body() segment: CreateMarketSegmentDto,
    @Param('id') id: number,
  ) {
    return this.marketSegmentService.updateMarketSegment(id, segment);
  }

  @ApiOperation({ summary: 'delete segment by id' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteSegment(@Param('id') id: number): Promise<number> {
    return this.marketSegmentService.removeById(id);
  }
}
