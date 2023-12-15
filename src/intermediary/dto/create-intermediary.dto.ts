import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateIntermediaryDto {
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
    description: 'team production assets',
  })
  @IsNumber({}, { message: 'production_assets must be a number' })
  production_assets: number;

  @ApiProperty({
    example: '1 050',
    description: 'team retail assets',
  })
  @IsNumber({}, { message: 'retail_assets must be a number' })
  retail_assets: number;

  @ApiProperty({
    example: '1 050',
    description: 'team production depreciation',
  })
  @IsNumber({}, { message: 'production_depreciation must be a number' })
  production_depreciation: number;

  @ApiProperty({
    example: '1 050',
    description: 'team retail depreciation in $',
  })
  @IsNumber({}, { message: 'retail_depreciation must be a number' })
  retail_depreciation: number;

  @ApiProperty({
    example: '10 000',
    description: 'team franchise cost',
  })
  @IsNumber({}, { message: 'franchise_cost must be a number' })
  franchise_cost: number;

  @ApiProperty({
    example: '1 050',
    description: 'team franchise fee',
  })
  @IsNumber({}, { message: 'franchise_fee must be a number' })
  franchise_fee: number;

  @ApiProperty({
    example: '15 050',
    description: 'team retail entry',
  })
  @IsNumber({}, { message: 'retail_entry must be a number' })
  retail_entry: number;

  @ApiProperty({
    example: '1 050',
    description: 'team retail annual fee',
  })
  @IsNumber({}, { message: 'retail_annual_fee must be a number' })
  retail_annual_fee: number;

  @ApiProperty({
    example: '1 050',
    description: 'team invest assets',
  })
  @IsNumber({}, { message: 'invest_assets must be a number' })
  invest_assets: number;

  @ApiProperty({
    example: '1 050',
    description: 'team market research',
  })
  @IsNumber({}, { message: 'market_research must be a number' })
  market_research: number;
}
