import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

enum chaintype {
  'online',
  'brick&mortar',
}

export class CreateChainDto {
  @ApiProperty({ example: '1000', description: 'game identifier' })
  @IsNumber({}, { message: 'game_id must be a number' })
  readonly gameId: number;

  @ApiProperty({
    example: 'wilaberries',
    description: 'independent chain name',
  })
  @IsString({ message: 'name must be a string' })
  readonly name: string;

  @ApiProperty({
    example: 'brick&mortar',
    description: 'independent chain type',
  })
  @IsEnum(chaintype)
  readonly type: string;

  @ApiProperty({ example: '2', description: 'chain stores' })
  @IsNumber({}, { message: 'stores must be a number' })
  readonly stores: number;
}
