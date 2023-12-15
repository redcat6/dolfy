import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePromotionDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '10', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({ example: 'Alpha bags spot', description: 'spot name' })
  @IsString({ message: 'name must be a string' })
  name: string;

  @ApiProperty({
    example: '0.05',
    description: 'cash back like as 0. 05 => 5%',
  })
  @IsNumber({}, { message: 'cashback must be a number' })
  cashback: number;

  @ApiProperty({
    example: '1',
    description: 'id of the trademark',
  })
  @IsNumber({}, { message: 'trademark id must be a number' })
  trademarkId: number;

  @ApiProperty({ example: '100', description: 'gift cost' })
  @IsNumber({}, { message: 'gift cost must be a number' })
  gift_cost: number;
}
