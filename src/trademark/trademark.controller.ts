import {
  Body,
  Controller,
  Get,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TrademarkService } from './trademark.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTrademarkDto } from './dto/create-trademark.dto';
import { Trademark } from './trademark.model';

@Controller('trademark')
export class TrademarkController {
  constructor(private trademarkService: TrademarkService) {}

  @ApiOperation({ summary: 'a new trademark creation' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTrademark(@Body() dto: CreateTrademarkDto): Promise<Trademark> {
    return this.trademarkService.createTrademark(dto);
  }

  @ApiOperation({ summary: 'get all trademarks' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: [Trademark] })
  @Get()
  getSegments(): Promise<Trademark[]> {
    return this.trademarkService.getAll();
  }

  @ApiOperation({ summary: 'edit segment by id' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  updateSegment(
    @Body() trademark: CreateTrademarkDto,
    @Param('id') id: number,
  ) {
    return this.trademarkService.updateTrademark(trademark, id);
  }

  @ApiOperation({ summary: 'delete trademark by id' })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteSegment(@Param('id') id: number): Promise<number> {
    return this.trademarkService.removeById(id);
  }
}
