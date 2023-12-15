import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Sales } from './sales.model';
import { CreateSalesDto } from './dto/create-sales.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @ApiOperation({ summary: 'sales creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() sales: CreateSalesDto): Promise<Sales> {
    return this.salesService.createSales(sales);
  }

  @ApiOperation({
    summary: 'get all sales by game and round',
  })
  @ApiResponse({ status: 200, type: [Sales] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Sales[]> {
    console.log('round: ', round);
    return this.salesService.getSalesByGame(game_id, round);
  }

  @ApiOperation({ summary: "getting team's sales by game id & round" })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getSalesByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Sales[]> {
    return this.salesService.getTeamSales(gameId, round, team_id);
  }

  /* @ApiOperation({ summary: 'getting the product' })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<Product> {
    return this.productService.getProductById(id);
  }
 */
  @ApiOperation({ summary: 'update sales' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() dto: CreateSalesDto, @Param('id') id: number) {
    return this.salesService.updateSales(id, dto);
  }

  @ApiOperation({ summary: 'delete sales by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.salesService.removeById(id);
  }
  @ApiOperation({
    summary: 'calculate sales by game and round',
  })
  @ApiResponse({ status: 200, type: [Sales] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate/:game_id?')
  calculateByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<any> {
    return this.salesService.calculateSales(game_id, round);
  }
}
