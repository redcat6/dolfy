import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTrademarkDto {
  @ApiProperty({ example: 'Baggy', description: 'name of trademark' })
  @IsString({ message: 'This must be a string' })
  readonly name: string;
}
