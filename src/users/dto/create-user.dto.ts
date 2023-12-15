import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'user email' })
  @IsString({ message: 'This must be a string' })
  @IsEmail({}, { message: 'Incorrect email format' })
  readonly email: string;

  @ApiProperty({ example: 'vjro904368jhl', description: 'user password' })
  @IsString({ message: 'This must be a string' })
  @Length(6, 12, { message: 'Must be from 6 to 12 characters' })
  readonly password: string;
}
