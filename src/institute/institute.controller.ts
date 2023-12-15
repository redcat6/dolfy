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
import { InstituteService } from './institute.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { Institute } from './institute.model';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('institute')
export class InstituteController {
  constructor(private readonly instituteService: InstituteService) {}

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createInstitute(@Body() dto: CreateInstituteDto): Promise<Institute> {
    return this.instituteService.create(dto);
  }

  @Get('/:name')
  getByValue(@Param('name') name: string): Promise<Institute> {
    return this.instituteService.getByValue(name);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAllInstitute(): Promise<Institute[]> {
    return this.instituteService.getAll();
  }

  //@ApiOperation({ summary: 'delete by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.instituteService.removeById(id);
  }
}
