import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateAFDto {
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

  @ApiProperty({
    example: '1.2',
    description: 'positioning tracker acceptance',
  })
  @IsNumber({}, { message: 'positioning tracker acceptance must be a number' })
  readonly positioning_acceptance: number;

  @ApiProperty({ example: '1.2', description: 'power bank acceptance' })
  @IsNumber({}, { message: 'power bank acceptance must be a number' })
  readonly power_bank_acceptance: number;

  @ApiProperty({
    example: '1.2',
    description: 'missed items warning acceptance',
  })
  @IsNumber({}, { message: 'missed items warning acceptance must be a number' })
  missed_items_warning_acceptance: number;

  @ApiProperty({ example: '1.2', description: 'danger alarm acceptance' })
  @IsNumber({}, { message: 'danger alarm acceptance must be a number' })
  danger_alarm_acceptance: number;

  @ApiProperty({ example: '1.2', description: 'fridge camera acceptance' })
  @IsNumber({}, { message: 'fridge camera acceptance must be a number' })
  fridge_camera_acceptance: number;

  @ApiProperty({ example: '1.2', description: 'loss insurance acceptance' })
  @IsNumber({}, { message: 'loss insurance acceptance must be a number' })
  loss_insurance_acceptance: number;

  @ApiProperty({
    example: '1.2',
    description: 'environment friendly utilization acceptance',
  })
  @IsNumber(
    {},
    { message: 'environment friendly utilization acceptance must be a number' },
  )
  friendly_utilization_acceptance: number;

  @ApiProperty({ example: '1.2', description: 'profit sharing acceptance' })
  @IsNumber({}, { message: 'profit sharing acceptance must be a number' })
  profit_sharing_acceptance: number;

  @ApiProperty({
    example: '1.2',
    description: 'individual pictures acceptance value',
  })
  @IsNumber({}, { message: 'individual pictures acceptance must be a number' })
  individual_pictures_acceptance: number;
}
