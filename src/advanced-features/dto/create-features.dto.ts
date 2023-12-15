import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateAFDto {
  @ApiProperty({ example: '12', description: 'game id' })
  @IsNumber({}, { message: 'game id must be a number' })
  readonly gameId: number;

  @ApiProperty({ example: '1', description: 'current round' })
  @IsNumber({}, { message: 'round must be a number' })
  readonly round: number;

  @ApiProperty({ example: '2', description: 'segment id' })
  @IsNumber({}, { message: 'segment id must be a number' })
  readonly segmentId: number;

  @ApiProperty({
    example: '1.2',
    description: 'positioning tracker need value',
  })
  @IsNumber({}, { message: 'positioning tracker need value must be a number' })
  readonly positioning_need: number;

  @ApiProperty({ example: '1.2', description: 'power bank need value' })
  @IsNumber({}, { message: 'power bank need value must be a number' })
  readonly power_bank_need: number;

  @ApiProperty({
    example: '1.2',
    description: 'missed items warning need value',
  })
  @IsNumber({}, { message: 'missed items warning need value must be a number' })
  missed_items_warning_need: number;

  @ApiProperty({ example: '1.2', description: 'danger alarm need value' })
  @IsNumber({}, { message: 'danger alarm need value must be a number' })
  danger_alarm_need: number;

  @ApiProperty({ example: '1.2', description: 'fridge camera need value' })
  @IsNumber({}, { message: 'fridge camera need value must be a number' })
  fridge_camera_need: number;

  @ApiProperty({ example: '1.2', description: 'loss insurance need value' })
  @IsNumber({}, { message: 'loss insurance need value must be a number' })
  loss_insurance_need: number;

  @ApiProperty({
    example: '1.2',
    description: 'environment friendly utilization need value',
  })
  @IsNumber(
    {},
    { message: 'environment friendly utilization need must be a number' },
  )
  friendly_utilization_need: number;

  @ApiProperty({ example: '1.2', description: 'profit sharing need value' })
  @IsNumber({}, { message: 'profit sharing need value must be a number' })
  profit_sharing_need: number;

  @ApiProperty({
    example: '1.2',
    description: 'individual pictures need value',
  })
  @IsNumber({}, { message: 'individual pictures need value must be a number' })
  individual_pictures_need: number;
}
