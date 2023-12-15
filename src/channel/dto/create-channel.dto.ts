import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateChannelDto {
  @ApiProperty({ example: '12', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  readonly gameId: number;

  @ApiProperty({ example: '12', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  readonly round: number;

  @ApiProperty({ example: '12', description: 'round of the channel creation' })
  @IsNumber({}, { message: 'register_round must be a number' })
  readonly register_round: number;

  @ApiProperty({ example: '12', description: 'team identifier' })
  @IsNumber({}, { message: 'team id must be a number' })
  readonly teamId: number;

  @ApiProperty({ example: '2', description: 'type of channel' })
  @IsNumber({}, { message: 'type must be a number' })
  readonly type: number;

  @ApiProperty({
    example: '0.5',
    description: 'name of channel',
  })
  @IsString({ message: 'name of channel must be a string' })
  readonly name: string;

  @ApiProperty({ example: '2', description: 'type of channel' })
  @IsNumber({}, { message: 'number of stores must be a number' })
  readonly stores: number;

  @ApiProperty({
    example: '2',
    description: 'investment costs of channel creation',
  })
  @IsNumber({}, { message: 'investment costs must be a number' })
  readonly investment_costs: number;

  @ApiProperty({ example: '2', description: 'operational costs of channel' })
  @IsNumber({}, { message: 'operational costs must be a number' })
  readonly operational_costs: number;

  @ApiProperty({
    example: '0.5',
    description: 'name of trademark',
  })
  @IsArray({ message: ' trademarks must be an array of strings' })
  readonly trademarks: string[];
}
