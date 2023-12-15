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
import { AdvancedFeature } from './advanced-features.model';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateAFDto } from './dto/create-features.dto';
import { AdvancedFeaturesService } from './advanced-features.service';

@Controller('advanced-features')
export class AdvancedFeaturesController {
  constructor(
    private readonly advancedFeatureService: AdvancedFeaturesService,
  ) {}

  @ApiOperation({ summary: 'a new advanced feature creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createAF(@Body() dto: CreateAFDto): Promise<AdvancedFeature> {
    console.log(dto);
    return this.advancedFeatureService.createAF(dto);
  }

  @ApiOperation({ summary: 'all advanced features' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Get()
  getAllAF(): Promise<AdvancedFeature[]> {
    return this.advancedFeatureService.getAll();
  }

  @ApiOperation({
    summary:
      'calculating the advanced features acceptance by game and current round',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/acceptance/:game_id?')
  calculateAcceptance(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<AdvancedFeature[]> {
    return this.advancedFeatureService.calculateAcceptance(game_id, round);
  }

  @ApiOperation({
    summary: 'transition advanced needs by game to next round',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/transition/:game_id?')
  goNextNeeds(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<void> {
    return this.advancedFeatureService.transitionNeeds(game_id, round);
  }

  @ApiOperation({ summary: 'get advanced features by game and current round' })
  @UseGuards(JwtAuthGuard)
  @Get('/:game_id?')
  getByGame(
    @Param('game_id') game_id: number,
    @Query('round') round: number,
  ): Promise<AdvancedFeature[]> {
    return this.advancedFeatureService.getByGame(game_id, round);
  }

  @ApiOperation({ summary: 'edit advanced feature needs by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/:id')
  updateSegment(@Body() af: CreateAFDto, @Param('id') id: number) {
    return this.advancedFeatureService.updateAF(id, af);
  }

  @ApiOperation({ summary: 'delete advanced feature by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteSegment(@Param('id') id: number): Promise<number> {
    return this.advancedFeatureService.removeById(id);
  }
}
