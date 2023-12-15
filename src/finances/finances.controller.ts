import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { FinancesService } from './finances.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateFinancesDto } from './dto/create-finances.dto';
import { Finances } from './finances.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('finances')
export class FinancesController {
  constructor(private financesService: FinancesService) {}

  @ApiOperation({ summary: 'finances creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateFinancesDto): Promise<Finances> {
    return this.financesService.createFinances(dto);
  }

  @ApiOperation({
    summary: 'get all finances by game and round',
  })
  @ApiResponse({ status: 200, type: [Finances] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Finances[]> {
    return this.financesService.getFinancesByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'calculate finances by game and round',
  })
  @ApiResponse({ status: 200, type: [Finances] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Finances[]> {
    return this.financesService.calculateFinances(game_id, round);
  }

  @ApiOperation({
    summary: 'transition finances by game to next round',
  })
  @ApiResponse({ status: 200, type: [Finances] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  financesTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.financesService.transitionFinances(game_id, round);
  }

  @ApiOperation({ summary: 'getting finances by team_id, game_id & round' })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:teamId?')
  getFinancesByTeam(
    @Param('teamId') teamId: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Finances[]> {
    return this.financesService.getTeamFinances(gameId, round, teamId);
  }

  @ApiOperation({ summary: 'update finances' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() dto: CreateFinancesDto, @Param('id') id: number) {
    return this.financesService.updateFinances(id, dto);
  }

  @ApiOperation({ summary: 'delete finances by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.financesService.removeById(id);
  }
}
