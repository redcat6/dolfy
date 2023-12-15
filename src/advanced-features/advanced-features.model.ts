import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';

interface AdvancedFeatureCreationAttrs {
  gameId: number;
  round: number;
  segmentId: number;
  positioning_need: number;
  power_bank_need: number;
  missed_items_warning_need: number;
  danger_alarm_need: number;
  fridge_camera_need: number;
  loss_insurance_need: number;
  friendly_utilization_need: number;
  profit_sharing_need: number;
  individual_pictures_need: number;
}

@Table({ tableName: 'advanced_features' })
export class AdvancedFeature extends Model<
  AdvancedFeature,
  AdvancedFeatureCreationAttrs
> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '12',
    description: 'game id',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  gameId: number;

  @ApiProperty({
    example: '2',
    description: 'current round',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  round: number;

  @ApiProperty({
    example: '1.5',
    description: 'positioning tracker need value',
  })
  @Column({ type: DataType.REAL })
  positioning_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'power bank need value',
  })
  @Column({ type: DataType.REAL })
  power_bank_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'missed items warning need value',
  })
  @Column({ type: DataType.REAL })
  missed_items_warning_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'danger alarm need value',
  })
  @Column({ type: DataType.REAL })
  danger_alarm_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'fridge camera need value',
  })
  @Column({ type: DataType.REAL })
  fridge_camera_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'loss insurance need value',
  })
  @Column({ type: DataType.REAL })
  loss_insurance_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'environment friendly utilization need value',
  })
  @Column({ type: DataType.REAL })
  friendly_utilization_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'profit sharing need value',
  })
  @Column({ type: DataType.REAL })
  profit_sharing_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'individual pictures need value',
  })
  @Column({ type: DataType.REAL })
  individual_pictures_need: number;

  @ApiProperty({
    example: '1.5',
    description: 'positioning tracker acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  positioning_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'power bank acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  power_bank_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'missed items warning acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  missed_items_warning_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'danger alarm acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  danger_alarm_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'fridge camera acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  fridge_camera_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'loss insurance acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  loss_insurance_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'environment friendly utilization acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  friendly_utilization_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'profit sharing acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  profit_sharing_acceptance: number;

  @ApiProperty({
    example: '1.5',
    description: 'individual pictures acceptance value',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  individual_pictures_acceptance: number;

  @ApiProperty({
    example: '1',
    description: 'segment id',
  })
  @ForeignKey(() => Segment)
  @Column({ type: DataType.INTEGER })
  segmentId: number;

  @BelongsTo(() => Segment)
  segment: Segment;
}
