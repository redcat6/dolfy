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

interface MarketSegmentCreationAttrs {
  gameId: number;
  round: number;
  segmentId: number;
  max_price: number;
  min_price: number;
  lowest_price: number;
  best_quality: number;
  on_line: number;
  off_line: number;
  family: number;
  attractiveness: number;
  personality: number;
  social_status: number;
  fun: number;
  friendship: number;
  pets: number;
  independent: number;
  brand_high: number;
  brand_not: number;
  brand_somehow: number;
  design_classic: number;
  design_art: number;
  design_business: number;
  design_casual: number;
  design_innovative: number;
  design_1: number;
  design_2: number;
  design_3: number;
  design_4: number;
  design_5: number;
  material_1: number;
  material_2: number;
  material_3: number;
  material_4: number;
  material_5: number;
  manufacturing_1: number;
  manufacturing_2: number;
  manufacturing_3: number;
  manufacturing_4: number;
  manufacturing_5: number;
}

@Table({ tableName: 'market_segments' })
export class MarketSegment extends Model<
  MarketSegment,
  MarketSegmentCreationAttrs
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
    example: '1000',
    description:
      'game identifier. id 1 - standart game, 3 - advanced game 2 - simple game',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  gameId: number;

  @ApiProperty({
    example: '0',
    description: 'current round of the game',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true, defaultValue: 0 })
  round: number;

  @ApiProperty({
    example: '1520',
    description: 'segment actual size last year',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  actual_size: number;

  @ApiProperty({ example: '120', description: 'max price for segment' })
  @Column({ type: DataType.INTEGER })
  max_price: number;

  @ApiProperty({ example: '50', description: 'min price for segment' })
  @Column({ type: DataType.INTEGER })
  min_price: number;

  @ApiProperty({ example: '0.25', description: 'Purchase habits' })
  @Column({ type: DataType.REAL })
  lowest_price: number;

  @ApiProperty({ example: '0.25', description: 'Purchase habits' })
  @Column({ type: DataType.REAL })
  best_quality: number;

  @ApiProperty({ example: 'Active', description: 'Purchasing preferences' })
  @Column({ type: DataType.REAL })
  on_line: number;

  @ApiProperty({ example: 'Active', description: 'Purchasing preferences' })
  @Column({ type: DataType.REAL })
  off_line: number;

  @ApiProperty({ example: '0.5', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  family: number;

  @ApiProperty({ example: '0.8', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  attractiveness: number;

  @ApiProperty({ example: '0.8', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  personality: number;

  @ApiProperty({ example: '0.5', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  social_status: number;

  @ApiProperty({ example: '0.3', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  fun: number;

  @ApiProperty({ example: '0.8', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  friendship: number;

  @ApiProperty({ example: '0.5', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  pets: number;

  @ApiProperty({ example: '0.5', description: 'Purchasing values' })
  @Column({ type: DataType.REAL })
  independent: number;

  @ApiProperty({ example: '0.8', description: 'Brand importance' })
  @Column({ type: DataType.REAL })
  brand_high: number;

  @ApiProperty({ example: '0.7', description: 'Brand importance' })
  @Column({ type: DataType.REAL })
  brand_not: number;

  @ApiProperty({ example: '0.8', description: 'Brand importance' })
  @Column({ type: DataType.REAL })
  brand_somehow: number;

  @ApiProperty({ example: '0.5', description: 'design type preferences' })
  @Column({ type: DataType.REAL })
  design_classic: number;

  @ApiProperty({ example: '0.8', description: 'design type preferences' })
  @Column({ type: DataType.REAL })
  design_art: number;

  @ApiProperty({ example: '0.6', description: 'design type preferences' })
  @Column({ type: DataType.REAL })
  design_business: number;

  @ApiProperty({ example: '0.2', description: 'design type preferences' })
  @Column({ type: DataType.REAL })
  design_casual: number;

  @ApiProperty({ example: '0.8', description: 'design type preferences' })
  @Column({ type: DataType.REAL })
  design_innovative: number;

  @ApiProperty({ example: '5', description: 'design quality' })
  @Column({ type: DataType.REAL })
  design_1: number;

  @ApiProperty({ example: '4', description: 'design quality' })
  @Column({ type: DataType.REAL })
  design_2: number;

  @ApiProperty({ example: '3', description: 'design quality' })
  @Column({ type: DataType.REAL })
  design_3: number;

  @ApiProperty({ example: '5', description: 'design quality' })
  @Column({ type: DataType.REAL })
  design_4: number;

  @ApiProperty({ example: '5', description: 'design quality' })
  @Column({ type: DataType.REAL })
  design_5: number;

  @ApiProperty({ example: '2', description: 'material quality' })
  @Column({ type: DataType.REAL })
  material_1: number;

  @ApiProperty({ example: '3', description: 'material quality' })
  @Column({ type: DataType.REAL })
  material_2: number;

  @ApiProperty({ example: '1', description: 'material quality' })
  @Column({ type: DataType.REAL })
  material_3: number;

  @ApiProperty({ example: '4', description: 'material quality' })
  @Column({ type: DataType.REAL })
  material_4: number;

  @ApiProperty({ example: '3', description: 'material quality' })
  @Column({ type: DataType.REAL })
  material_5: number;

  @ApiProperty({ example: '5', description: 'manufacturing quality' })
  @Column({ type: DataType.REAL })
  manufacturing_1: number;

  @ApiProperty({ example: '4', description: 'manufacturing quality' })
  @Column({ type: DataType.REAL })
  manufacturing_2: number;

  @ApiProperty({ example: '3', description: 'manufacturing quality' })
  @Column({ type: DataType.REAL })
  manufacturing_3: number;

  @ApiProperty({ example: '4', description: 'manufacturing quality' })
  @Column({ type: DataType.REAL })
  manufacturing_4: number;

  @ApiProperty({ example: '4', description: 'manufacturing quality' })
  @Column({ type: DataType.REAL })
  manufacturing_5: number;

  @ApiProperty({ example: '1', description: 'segment identifier' })
  @ForeignKey(() => Segment)
  @Column({ type: DataType.INTEGER })
  segmentId: number;

  @BelongsTo(() => Segment)
  segment: Segment;
}
