import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';
import { advanced_feature, core_message, objectives, values } from 'src/enums';

export class CreateSpotDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '1', description: 'round of spot creation' })
  @IsNumber({}, { message: 'registr_round must be a number' })
  register_round: number;

  @ApiProperty({ example: '10', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  teamId: number;

  @ApiProperty({ example: 'Alpha bags spot', description: 'spot name' })
  @IsString({ message: 'name must be a string' })
  name: string;

  @ApiProperty({
    example: 'design',
    description: 'core message focus (optional)',
  })
  @IsEnum(core_message)
  core_message: string;

  @ApiProperty({ example: 'power bank', description: 'advenced feature' })
  @IsEnum(advanced_feature)
  advanced_feature: string;

  @ApiProperty({ example: 'fun', description: 'values for promotion' })
  @IsEnum(values)
  value: string;

  @ApiProperty({ example: 'create demand', description: 'promotion objective' })
  @IsEnum(objectives)
  objective: string;

  @ApiProperty({ example: '1', description: 'level of the spot quality' })
  @IsNumber({}, { message: 'spot quality must be a number' })
  quality: number;

  @ApiProperty({ example: 'attractive', description: 'price' })
  @IsString({ message: 'price must be a string' })
  price: string;

  @ApiProperty({
    example: '1',
    description: 'id of the trademark',
  })
  @IsNumber({}, { message: 'trademark id must be a number' })
  trademarkId: number;

  @ApiProperty({
    example: '[Business]',
    description: 'array of the segments name',
  })
  @IsArray({ message: 'segments must be an aaray' })
  segments: string[];

  @ApiProperty({
    example: '[TV, SMM]',
    description: 'array of the channels name',
  })
  @IsArray({ message: 'channels must be an aaray' })
  channels: string[];

  @ApiProperty({ example: '1', description: 'investments of the spot' })
  @IsNumber({}, { message: 'investments must be a number' })
  investments: number;

  @ApiProperty({ example: '1', description: 'spot operations costs' })
  @IsNumber({}, { message: 'operations must be a number' })
  operations: number;
}
