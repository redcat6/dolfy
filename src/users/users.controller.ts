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
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('/user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'professor account creation' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'get all users data.  only for role admin' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'getting the user data' })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({ summary: 'update user data' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN', 'PROFESSOR')
  @UseGuards(RolesGuard)
  @Put('/:id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: number) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @ApiOperation({ summary: 'delete user by id' })
  @HttpCode(HttpStatus.RESET_CONTENT)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  removeById(@Param('id') id: number): Promise<number> {
    return this.usersService.removeById(id);
  }
}
