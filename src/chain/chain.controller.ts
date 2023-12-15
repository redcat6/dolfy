import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChainService } from './chain.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateChainDto } from './dto/create-chain.dto';
import { Chain } from './chain.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Independent chain')
@Controller('chain')
export class ChainController {
  constructor(private chainService: ChainService) {}

  @ApiOperation({ summary: 'a new chain creation' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createChain(@Body() dto: CreateChainDto): Promise<Chain> {
    return this.chainService.createChain(dto);
  }

  @ApiOperation({ summary: 'get all independent chains' })
  @UseGuards(JwtAuthGuard)
  @Get('/:game_id')
  @HttpCode(HttpStatus.CREATED)
  getChainsByGame(@Param('game_id') game_id: number): Promise<Chain[]> {
    return this.chainService.getByGame(game_id);
  }

  @ApiOperation({ summary: 'edit segment by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/:id')
  updateChain(@Body() chain: CreateChainDto, @Param('id') id: number) {
    return this.chainService.updateChain(id, chain);
  }

  @ApiOperation({ summary: 'delete segment by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteSegment(@Param('id') id: number): Promise<number> {
    return this.chainService.removeById(id);
  }
}
