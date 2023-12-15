import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class EditChannelDto {
  @ApiProperty({ example: '2', description: 'stores of channel' })
  @IsNumber({}, { message: 'stores must be a number' })
  readonly stores: number;

  @ApiProperty({
    example: '972',
    description: 'investment costs of channel creation',
  })
  @IsNumber({}, { message: 'investment costs must be a number' })
  readonly investment_costs: number;

  @ApiProperty({ example: '1582', description: 'operational costs of channel' })
  @IsNumber({}, { message: 'operational costs must be a number' })
  readonly operational_costs: number;
}
