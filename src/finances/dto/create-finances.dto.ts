import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFinancesDto {
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
    description: 'team fixed assets',
  })
  @IsNumber({}, { message: 'fixed_assets must be a number' })
  fixed_assets: number;

  @ApiProperty({
    example: '1 050',
    description: 'team cash',
  })
  @IsNumber({}, { message: 'cash must be a number' })
  cash: number;

  @ApiProperty({
    example: '10 000 000',
    description: 'team contributed capital',
  })
  @IsNumber({}, { message: 'contributed_capital must be a number' })
  contributed_capital: number;

  @ApiProperty({
    example: '15 050',
    description: 'team long term debt',
  })
  @IsNumber({}, { message: 'long_term_debt must be a number' })
  long_term_debt: number;
}
