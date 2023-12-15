import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promo.model';
import { PromoService } from './promo.service';
import { CheckPromoDto } from './dto/check-promo.dto';
import { User } from 'src/users/users.model';

@Controller('/promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPromo(@Body() dto: CreatePromoDto): Promise<Promo> {
    return this.promoService.create(dto);
  }

  //@UseGuards(JwtAuthGuard)
  @Post('/activate')
  getByValue(@Body() dto: CheckPromoDto): Promise<User> {
    return this.promoService.getByValue(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<Promo[]> {
    return this.promoService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Promo> {
    return this.promoService.getById(id);
  }

  //@ApiOperation({ summary: 'delete promo by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.promoService.removeById(id);
  }
}
