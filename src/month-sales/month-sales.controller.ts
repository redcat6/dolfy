import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MonthSalesService } from './month-sales.service';
import { CreateMonthSalesDto } from './dto/create-month-sales.dto';
import { MonthSales } from './month-sales.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('month-sales')
export class MonthSalesController {
  constructor(private monthSalesService: MonthSalesService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'month sales creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateMonthSalesDto): Promise<MonthSales> {
    return this.monthSalesService.createMonthSales(dto);
  }

  @ApiOperation({
    summary: 'get all month sales by game and round',
  })
  @ApiResponse({ status: 200, type: [MonthSales] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MonthSales[]> {
    return this.monthSalesService.getMonthSalesByGame(game_id, round);
  }

  @ApiOperation({ summary: "getting team's sales by game id & round" })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getSalesByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<MonthSales[]> {
    return this.monthSalesService.getTeamMonthSales(gameId, round, team_id);
  }

  @ApiOperation({
    summary: 'month sales calculating by game and round',
  })
  @ApiResponse({ status: 200, type: [MonthSales] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<MonthSales[]> {
    return this.monthSalesService.calculateMonthSales(game_id, round);
  }
} /* Promise */
