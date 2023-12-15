import {
  Controller,
  Body,
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
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './promotion.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('promotion')
export class PromotionController {
  constructor(private promotionService: PromotionService) {}

  @ApiOperation({ summary: 'promotion action creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() promotionDto: CreatePromotionDto): Promise<Promotion> {
    return this.promotionService.createPromotion(promotionDto);
  }

  @ApiOperation({
    summary: 'get all promotions by game and round',
  })
  @ApiResponse({ status: 200, type: [Promotion] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Promotion[]> {
    return this.promotionService.getPromotionsByGame(game_id, round);
  }

  @ApiOperation({ summary: 'getting promotions by game id & round' })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getPromotionsByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Promotion[]> {
    return this.promotionService.getTeamPromotions(gameId, round, team_id);
  }

  @ApiOperation({ summary: 'delete promotion by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.promotionService.removeById(id);
  }
}
