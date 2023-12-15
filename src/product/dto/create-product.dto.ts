import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { designType } from 'src/enums';

export class CreateProductDto {
  @ApiProperty({ example: '_icy78c0', description: 'product identifier' })
  @IsString({ message: 'id must be a string' })
  productId: string;

  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '4', description: 'trademark of the product' })
  @IsString({ message: 'trademark must be a string' })
  trademark: string;

  @ApiProperty({
    example: 'model-4',
    description: 'name of product',
  })
  @IsString({ message: 'Model must be a string' })
  model: string;

  @ApiProperty({ example: '1', description: 'level of material quality' })
  @IsNumber({}, { message: 'material must be a number' })
  material: number;

  @ApiProperty({ example: '1', description: 'level of manufacturing quality' })
  @IsNumber({}, { message: 'manufacturing must be a number' })
  manufacturing: number;

  @ApiProperty({ example: '1', description: 'level of design quality' })
  @IsNumber({}, { message: 'design must be a number' })
  design: number;

  @ApiProperty({ example: '1', description: 'type of design' })
  @IsEnum(designType)
  design_type: string;

  @ApiProperty({ example: '1', description: 'number of model variations' })
  @IsNumber({}, { message: 'variations must be a number' })
  variations: number;

  @ApiProperty({
    example: 'individual pictures',
    description: 'advanced feature name',
  })
  @IsString({ message: 'advenced feature  must be a string' })
  advanced_feature: string;

  @ApiProperty({ example: '17.2', description: 'unit cost' })
  @IsNumber({}, { message: 'unit cost must be a number' })
  unit_cost: number;

  @ApiProperty({ example: '1', description: 'r&d investments' })
  @IsNumber({}, { message: 'investments must be a number' })
  investments: number;

  @ApiProperty({ example: '5', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({
    example: '1',
    description: 'number of month to available the product',
  })
  @IsNumber({}, { message: 'available (from) must be a number' })
  available_from: number;

  @ApiProperty({
    example: '1',
    description: 'number of month till the product available',
  })
  @IsNumber({}, { message: 'available (till) must be a number' })
  available_till: number;
}
