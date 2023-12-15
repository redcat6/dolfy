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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { EditProductDto } from './dto/edit-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({ summary: 'product creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @ApiOperation({
    summary: 'get all products by game and round',
  })
  @ApiResponse({ status: 200, type: [Product] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Product[]> {
    console.log('round: ', round);
    return this.productService.getProductsByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'transition products by game to next round',
  })
  @ApiResponse({ status: 200, type: [Product] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  productTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    console.log('round: ', round);
    return this.productService.transitionProduct(game_id, round);
  }

  @ApiOperation({ summary: "getting team's products by game id & round" })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getProductsByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Product[]> {
    return this.productService.getTeamProducts(gameId, round, team_id);
  }

  @ApiOperation({ summary: 'update product' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() dto: any, @Param('id') id: number) {
    return this.productService.updateProduct(id, dto);
  }

  @ApiOperation({ summary: 'delete product by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.productService.removeById(id);
  }
}
