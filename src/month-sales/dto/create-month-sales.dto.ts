import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateMonthSalesDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '10', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({ example: '10', description: 'trademark identifier' })
  @IsNumber({}, { message: 'trademark id must be a number' })
  trademarkId: number;

  @ApiProperty({ example: '10', description: 'segment identifier' })
  @IsNumber({}, { message: 'segment id must be a number' })
  segmentId: number;

  @ApiProperty({ example: '5', description: 'month' })
  @IsNumber({}, { message: 'month id must be a number' })
  month: number;

  @ApiProperty({ example: '_vjk89b5', description: 'product identifier' })
  @IsString({ message: 'productId id must be a string' })
  productId: string;

  @ApiProperty({ example: 'M-01', description: 'model name' })
  @IsString({ message: 'model id must be a string' })
  model: string;
}
