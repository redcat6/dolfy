import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.model';
import { GameService } from './game.service';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @ApiOperation({ summary: 'a new game creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createGame(@Body() gameDto: CreateGameDto): Promise<Game> {
    return this.gameService.createGame(gameDto);
  }

  @ApiOperation({ summary: 'all game' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @Get()
  getAllGames(): Promise<Game[]> {
    return this.gameService.getAllGames();
  }

  @ApiOperation({ summary: 'update game' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() obj: any, @Param('id') id: number): Promise<void> {
    return this.gameService.updateGame(id, obj);
  }

  @ApiOperation({ summary: 'get game by id' })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getGameById(@Param('id') id: number): Promise<Game> {
    return this.gameService.getGameById(id);
  }

  @ApiOperation({ summary: 'get all professor games' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Get('/users/:user_id')
  getUserGames(@Param('user_id') user_id: number): Promise<Game[]> {
    //console.log(user_id);
    return this.gameService.getAllUserGames(user_id);
  }
}
