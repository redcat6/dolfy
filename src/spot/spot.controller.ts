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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SpotService } from './spot.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { Spot } from './spot.model';

@Controller('spot')
export class SpotController {
  constructor(private spotService: SpotService) {}

  @ApiOperation({ summary: 'spot creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() spotDto: CreateSpotDto): Promise<Spot> {
    return this.spotService.createSpot(spotDto);
  }

  @ApiOperation({
    summary: 'get all spots by game and round',
  })
  @ApiResponse({ status: 200, type: [Spot] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Spot[]> {
    return this.spotService.getSpotsByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'transition spots by game to next round',
  })
  @ApiResponse({ status: 200, type: [Spot] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  spotTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.spotService.transitionSpot(game_id, round);
  }

  @ApiOperation({ summary: 'getting spots by game id & round' })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getProductsByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Spot[]> {
    return this.spotService.getTeamSpots(gameId, round, team_id);
  }

  @ApiOperation({ summary: 'delete spot by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.spotService.removeById(id);
  }
}
