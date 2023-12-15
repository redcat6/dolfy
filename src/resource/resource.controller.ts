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
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { Resource } from './resource.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('resource')
export class ResourceController {
  constructor(private resourceService: ResourceService) {}

  @ApiOperation({ summary: 'resource creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() resourceDto: CreateResourceDto): Promise<Resource> {
    return this.resourceService.createResource(resourceDto);
  }

  @ApiOperation({
    summary: 'get all resources by game and round',
  })
  @ApiResponse({ status: 200, type: [Resource] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getByGameAndRound(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Resource[]> {
    return this.resourceService.getResourcesByGame(game_id, round);
  }

  @ApiOperation({
    summary: 'transition resources by game to next round',
  })
  @ApiResponse({ status: 200, type: [Resource] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  resourchesTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.resourceService.transitionResources(game_id, round);
  }

  @ApiOperation({ summary: 'getting resources by team_id, game_id & round' })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:teamId?')
  getResourcesByTeam(
    @Param('teamId') teamId: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Resource[]> {
    return this.resourceService.getTeamResources(gameId, round, teamId);
  }

  @ApiOperation({ summary: 'update resource' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() obj: any, @Param('id') id: number): Promise<void> {
    return this.resourceService.updateResource(id, obj);
  }

  @ApiOperation({ summary: 'delete resource by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.resourceService.removeById(id);
  }
}
