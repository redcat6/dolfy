import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSalesDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '5', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({ example: '5', description: 'trademark id of the product' })
  @IsNumber({}, { message: 'trademarkId must be a number' })
  trademarkId: number;

  @ApiProperty({ example: '_icy78c0', description: 'product identifier' })
  @IsString({ message: 'id must be a string' })
  productId: string;

  @ApiProperty({
    example: 'model-4',
    description: 'name of product',
  })
  @IsString({ message: 'Model must be a string' })
  model: string;
}
