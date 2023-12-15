import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Delete,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MediaCostsService } from './media-costs.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateMediaCostsDto } from './dto/create-media-costs.dto';
import { MediaCosts } from './media-costs.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('media-costs')
export class MediaCostsController {
  constructor(private mediaCostsService: MediaCostsService) {}

  @ApiOperation({ summary: 'media costs creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateMediaCostsDto): Promise<MediaCosts> {
    return this.mediaCostsService.createMediaCosts(dto);
  }

  @ApiOperation({
    summary: 'get all media costs by game and round',
  })
  @ApiResponse({ status: 200, type: [MediaCosts] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MediaCosts[]> {
    return this.mediaCostsService.getMediaCostsByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'transition media costs by game to next round',
  })
  @ApiResponse({ status: 200, type: [MediaCosts] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  transitionNextRond(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.mediaCostsService.transitionMediaCosts(game_id, round);
  }

  @ApiOperation({ summary: 'delete medis costs by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.mediaCostsService.removeById(id);
  }
}
