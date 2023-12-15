import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePromoDto {
  @ApiProperty({ example: '10', description: 'institute id' })
  @IsNumber({}, { message: 'instituteId must be a number' })
  readonly instituteId: number;

  @ApiProperty({ example: '1', description: 'user id' })
  @IsString({ message: 'user_name must be a string' })
  readonly user_name: string;

  @ApiProperty({ example: 'eov9gfn0hn', description: 'promo-code' })
  @IsString({ message: 'code must be a string' })
  readonly code: string;
}
