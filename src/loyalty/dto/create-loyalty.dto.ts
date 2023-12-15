import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateLoyaltyDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '10', description: 'trademark identifier' })
  @IsNumber({}, { message: 'trademark id must be a number' })
  trademarkId: number;

  @ApiProperty({ example: '10', description: 'segment identifier' })
  @IsNumber({}, { message: 'segment id must be a number' })
  segmentId: number;
}
