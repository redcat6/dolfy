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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AwarenessService } from './awareness.service';
import { CreateAwarenessDto } from './dto/create-awareness.dto';
import { Awareness } from './awareness.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('awareness')
export class AwarenessController {
  constructor(private awarenessService: AwarenessService) {}

  @ApiOperation({ summary: 'awareness creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAwarenessDto): Promise<Awareness> {
    return this.awarenessService.createAwareness(dto);
  }

  @ApiOperation({
    summary: 'awareness calculating by game and round',
  })
  @ApiResponse({ status: 200, type: [Awareness] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Awareness[]> {
    return this.awarenessService.calculateAwareness(game_id, round);
  }

  @ApiOperation({
    summary: 'awareness transition by game to next round',
  })
  @ApiResponse({ status: 200, type: [Awareness] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  awarenessTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.awarenessService.transitionAwareness(game_id, round);
  }

  @ApiOperation({
    summary: 'get awareness by game and round',
  })
  @ApiResponse({ status: 200, type: [Awareness] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Awareness[]> {
    return this.awarenessService.getAwarenessByGame(game_id, round);
  }

  @ApiOperation({ summary: 'delete awareness by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.awarenessService.removeById(id);
  }
}
