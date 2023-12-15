import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateMarketSegmentDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game_id must be a number' })
  readonly gameId: number;

  @ApiProperty({ example: '2', description: 'current round of game' })
  @IsNumber({}, { message: 'round must be a number' })
  readonly round: number;

  @ApiProperty({ example: '10', description: 'segment identifier' })
  @IsNumber({}, { message: 'segment id must be a number' })
  readonly segmentId: number;

  @ApiProperty({ example: '150', description: 'max price for segment' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly max_price: number;

  @ApiProperty({ example: '50', description: 'min price for segment' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly min_price: number;

  @ApiProperty({ example: '0.8', description: 'purchase habits' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly lowest_price: number;

  @ApiProperty({ example: '0.2', description: 'purchase habits' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly best_quality: number;

  @ApiProperty({ example: '0.8', description: 'purchase habits' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly on_line: number;

  @ApiProperty({ example: '0.8', description: 'purchase habits' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly off_line: number;

  @ApiProperty({ example: '0.7', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly family: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly attractiveness: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly personality: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly social_status: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly fun: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly friendship: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly pets: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly independent: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly brand_high: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly brand_not: number;

  @ApiProperty({ example: '0.8', description: 'purchasing preferences' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly brand_somehow: number;

  @ApiProperty({ example: '0.8', description: 'design type' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_classic: number;

  @ApiProperty({ example: '0.8', description: 'design type' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_art: number;

  @ApiProperty({ example: '0.8', description: 'design type' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_business: number;

  @ApiProperty({ example: '0.8', description: 'design type' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_casual: number;

  @ApiProperty({ example: '0.8', description: 'design type' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_innovative: number;

  @ApiProperty({ example: '4', description: 'design quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_1: number;

  @ApiProperty({ example: '5', description: 'design quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_2: number;

  @ApiProperty({ example: '3', description: 'design quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_3: number;

  @ApiProperty({ example: '3', description: 'design quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_4: number;

  @ApiProperty({ example: '3', description: 'design quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly design_5: number;

  @ApiProperty({ example: '3', description: 'material quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly material_1: number;

  @ApiProperty({ example: '4', description: 'material quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly material_2: number;

  @ApiProperty({ example: '3', description: 'material quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly material_3: number;

  @ApiProperty({ example: '4', description: 'material quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly material_4: number;

  @ApiProperty({ example: '5', description: 'material quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly material_5: number;

  @ApiProperty({ example: '4', description: 'manufacturing quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly manufacturing_1: number;

  @ApiProperty({ example: '3', description: 'manufacturing quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly manufacturing_2: number;

  @ApiProperty({ example: '2', description: 'manufacturing quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly manufacturing_3: number;

  @ApiProperty({ example: '3', description: 'manufacturing quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly manufacturing_4: number;

  @ApiProperty({ example: '5', description: 'manufacturing quality' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly manufacturing_5: number;
}
