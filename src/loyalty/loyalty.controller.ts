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
import { LoyaltyService } from './loyalty.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Loyalty } from './loyalty.model';

@Controller('loyalty')
export class LoyaltyController {
  constructor(private loyaltyService: LoyaltyService) {}

  @ApiOperation({ summary: 'loyalty creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateLoyaltyDto): Promise<Loyalty> {
    return this.loyaltyService.createLoyalty(dto);
  }

  @ApiOperation({
    summary: 'loyalty calculating by game and round',
  })
  @ApiResponse({ status: 200, type: [Loyalty] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Loyalty[]> {
    return this.loyaltyService.calculateLoyalty(game_id, round);
  }

  @ApiOperation({
    summary: 'loyalty transition by game to next round',
  })
  @ApiResponse({ status: 200, type: [Loyalty] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  loyaltyTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.loyaltyService.transitionLoyalty(game_id, round);
  }

  @ApiOperation({
    summary: 'get loyalty by game and round',
  })
  @ApiResponse({ status: 200, type: [Loyalty] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Loyalty[]> {
    return this.loyaltyService.getLoyaltyByGame(game_id, round);
  }

  @ApiOperation({ summary: 'delete loyalty by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.loyaltyService.removeById(id);
  }
}
