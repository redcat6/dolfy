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
import { ChannelService } from './channel.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Channel } from './channel.model';
import { CreateChannelDto } from './dto/create-channel.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { addTrademarkDto } from './dto/add-trademark.dto';
import { EditChannelDto } from './dto/edit-channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(private channelService: ChannelService) {}

  @ApiOperation({ summary: 'channel creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateChannelDto): Promise<Channel> {
    return this.channelService.createChannel(dto);
  }

  @ApiOperation({ summary: 'add channel trademark' })
  @Post('/trademark')
  @HttpCode(HttpStatus.CREATED)
  updateTrademarks(@Body() dto: addTrademarkDto): Promise<Channel> {
    return this.channelService.addTrademark(dto);
  }

  @ApiOperation({ summary: 'remove channel trademark' })
  @UseGuards(JwtAuthGuard)
  @Delete('/trademark/:channelId?')
  deleteTrademark(
    @Param('channelId') channelId: number,
    @Query('trademark') trademark: string,
  ): Promise<Channel> {
    return this.channelService.removeTrademark(channelId, trademark);
  }

  @ApiOperation({ summary: 'getting channel by id' })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getChannelById(@Param('id') id: number): Promise<Channel> {
    return this.channelService.getChannelById(id);
  }

  @ApiOperation({ summary: 'get all channels needs by game_id & round' })
  @ApiResponse({ status: 200, type: [Channel] })
  @UseGuards(JwtAuthGuard)
  @Get('/game/:game_id?')
  getNeedsByGame(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Channel[]> {
    return this.channelService.getChannelsByGame(game_id, round);
  }

  @ApiOperation({
    summary:
      'get channels(registrated in independent chain) by game_id & round',
  })
  @ApiResponse({ status: 200, type: [Channel] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate_independent/:game_id?')
  getIndependentByGame(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Channel[]> {
    return this.channelService.calculateIndependentChains(game_id, round);
  }

  @ApiOperation({
    summary:
      'get channels(registrated in independent chain) by game_id & round',
  })
  @ApiResponse({ status: 200, type: [Channel] })
  @UseGuards(JwtAuthGuard)
  @Get('/calculate_franchise/:game_id?')
  getFrinchiseByGame(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<Channel[]> {
    return this.channelService.calculateFranchiseStores(game_id, round);
  }

  @ApiOperation({
    summary: 'transition channelsby game to next round',
  })
  @ApiResponse({ status: 200, type: [Channel] })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  channelTransition(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.channelService.transitionChannel(game_id, round);
  }

  @ApiOperation({
    summary: "getting team's channels by game id, round & team_id",
  })
  @UseGuards(JwtAuthGuard)
  @Get('/team/:team_id?')
  getChannelsByTeam(
    @Param('team_id') team_id: number,
    @Query('gameId') gameId: number,
    @Query('round') round: number,
  ): Promise<Channel[]> {
    return this.channelService.getTeamChannels(gameId, round, team_id);
  }

  @ApiOperation({ summary: 'update channel' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Body() dto: any, @Param('id') id: number) {
    return this.channelService.updateChannel(id, dto);
  }

  @ApiOperation({ summary: 'delete channel by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.channelService.removeChannelById(id);
  }
}
