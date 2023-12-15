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
import { IntermediaryService } from './intermediary.service';
import { Intermediary } from './intermediary.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateIntermediaryDto } from './dto/create-intermediary.dto';

@Controller('intermediary')
export class IntermediaryController {
  constructor(private intermediaryService: IntermediaryService) {}

  @ApiOperation({ summary: 'intermediary creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateIntermediaryDto): Promise<Intermediary> {
    return this.intermediaryService.createIntermediary(dto);
  }

  @ApiOperation({
    summary: 'get all intermediary by game and round',
  })
  @ApiResponse({ status: 200, type: [Intermediary] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Intermediary[]> {
    return this.intermediaryService.getIntermediaryByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'calculate intermediary by game and round',
  })
  @ApiResponse({ status: 200, type: [Intermediary] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateIntermediary(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Intermediary[]> {
    return this.intermediaryService.calculateIndermediary(game_id, round);
  }

  @ApiOperation({
    summary: 'transition intermediary by game to next round',
  })
  @ApiResponse({ status: 200, type: [Intermediary] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  intermediaryTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.intermediaryService.transitionIndermediary(game_id, round);
  }

  @ApiOperation({ summary: 'getting intermediary by team_id, game_id & round' })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:teamId?')
  getFinancesByTeam(
    @Param('teamId') teamId: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Intermediary> {
    return this.intermediaryService.getTeamIntermediary(gameId, round, teamId);
  }

  @ApiOperation({ summary: 'update intermediary' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() obj: any, @Param('id') id: number) {
    return this.intermediaryService.updateIntermediary(id, obj);
  }

  @ApiOperation({ summary: 'delete intermediary by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.intermediaryService.removeById(id);
  }
}
