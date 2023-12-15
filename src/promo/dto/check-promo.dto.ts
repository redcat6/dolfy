import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CheckPromoDto {
  @ApiProperty({ example: 'f86BO9cr5Kh2', description: 'string-code' })
  @IsString({ message: 'This must be a string' })
  @Length(12, 12, { message: 'Must be from 12  to 12 characters' })
  readonly code: string;

  @ApiProperty({ example: 'super_user@mail.ru', description: 'user email' })
  @IsString({ message: 'email must be a string' })
  @IsEmail({}, { message: 'Incorrect email format' })
  readonly email: string;
}
