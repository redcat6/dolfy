import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class CreateResourceDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '10', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({
    example: '1 050',
    description: 'team capacities for current round',
  })
  @IsNumber({}, { message: 'capacities must be a number' })
  capacities: number;

  @ApiProperty({
    example: '1 050',
    description: 'team capacities increase for next round',
  })
  @IsNumber({}, { message: 'capacities_increase must be a number' })
  capacities_increase: number;

  @ApiProperty({
    example: '15 050',
    description: 'team long term debt',
  })
  @IsNumber({}, { message: 'long_term_debt must be a number' })
  long_term_debt: number;

  @ApiProperty({
    example: '1350',
    description: 'team borrowings for next rounds',
  })
  @IsNumber({}, { message: 'borrowings must be a number' })
  borrowings: number;
}
