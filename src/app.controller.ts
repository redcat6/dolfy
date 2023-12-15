import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Roles } from './auth/roles-auth.decorator';
import { RolesGuard } from './auth/roles.guard';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  /* @Get()
  mainPage(): string {
    return 'main page';
  } */
  //for roles control routes
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/admin')
  adminExcess(): string {
    return 'Admin content';
  }

  @Roles('USER')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/user')
  userExcess(): string {
    console.log('user content work!');
    return 'Uaser content';
  }
}
