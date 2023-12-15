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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.model';
import { TeamService } from './team.service';

@ApiTags('Teams')
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({ summary: 'a new team creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createGame(@Body() teamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(teamDto);
  }

  @ApiOperation({ summary: "get all games'teams" })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Get('/game/:game_id?')
  getAllGames(
    @Param('game_id') game_id: number,
    @Query('limit') limit: number,
  ): Promise<Team[]> {
    return this.teamService.getAllGamesTeam(game_id, limit);
  }

  @ApiOperation({ summary: 'get team by id' })
  @UseGuards(JwtAuthGuard)
  @Get('/:teamId')
  getTeamById(@Param('teamId') teamId: number): Promise<Team> {
    return this.teamService.getTeamById(teamId);
  }
}
