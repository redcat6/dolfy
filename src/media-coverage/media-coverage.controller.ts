import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MediaCoverageService } from './media-coverage.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MediaCoverage } from './media-coverage.model';
import { CreateMediaCoverageDto } from './dto/create-media-coverage.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('media-coverage')
export class MediaCoverageController {
  constructor(private mediaCoverageService: MediaCoverageService) {}

  @ApiOperation({ summary: 'media coverage creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateMediaCoverageDto): Promise<MediaCoverage> {
    return this.mediaCoverageService.createMediaCoverage(dto);
  }

  @ApiOperation({
    summary: 'get all media coverage by game and round',
  })
  @ApiResponse({ status: 200, type: [MediaCoverage] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getCoverageByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MediaCoverage[]> {
    console.log('game: ', game_id);
    return this.mediaCoverageService.getMediaCoverageByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'transition media coverage by game to next round',
  })
  @ApiResponse({ status: 200, type: [MediaCoverage] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  transitionMediaCoverage(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.mediaCoverageService.transitionMediaCoverage(game_id, round);
  }

  @ApiOperation({ summary: 'delete medis coverage by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.mediaCoverageService.removeById(id);
  }
}
