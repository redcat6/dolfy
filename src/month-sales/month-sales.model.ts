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
import { Trademark } from 'src/trademark/trademark.model';

interface MonthSalesCreationAttrs {
  gameId: number;
  round: number;
  teamId: number;
  trademarkId: number;
  segmentId: number;
  productId: string;
  model: string;
  month: number;
}

@Table({ tableName: 'month_sales' })
export class MonthSales extends Model<MonthSales, MonthSalesCreationAttrs> {
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
    example: '5',
    description: 'team identifier',
  })
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ApiProperty({
    example: '1',
    description: 'trademark id',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '12',
    description: 'segment id',
  })
  @ForeignKey(() => Segment)
  @Column({ type: DataType.INTEGER })
  segmentId: number;

  @ApiProperty({
    example: '_dhhv75',
    description: 'product identifier',
  })
  @Column({ type: DataType.STRING })
  productId: string;

  @ApiProperty({
    example: 'M-01',
    description: 'model name',
  })
  @Column({ type: DataType.STRING })
  model: string;

  @ApiProperty({
    example: '1',
    description: 'month number 1-12',
  })
  @Column({ type: DataType.INTEGER })
  month: number;

  @ApiProperty({
    example: '1598',
    description: 'production plan per 1 month (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  available_sales: number;

  @ApiProperty({
    example: '2598',
    description: 'peak market coverage all channels per 1 month (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  capacity: number;

  @ApiProperty({
    example: '1598',
    description: 'min(avalabil_sales, capacity) (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  offered_sale: number;

  @ApiProperty({
    example: '13588',
    description: 'max model demand per 1 month (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  max_demand: number;

  @ApiProperty({
    example: '0.2',
    description: 'brand important rank',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  rank_bi: number;

  @ApiProperty({
    example: '0.2',
    description: 'brand somehow important rank',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  rank_bsi: number;

  @ApiProperty({
    example: '0.2',
    description: 'brand not important rank',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  rank_bni: number;

  @ApiProperty({
    example: '13588',
    description: 'max sales per subsegment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  max_sales_bi: number;

  @ApiProperty({
    example: '1588',
    description: 'max sales per subsegment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  max_sales_bsi: number;

  @ApiProperty({
    example: '1588',
    description: 'max sales per subsegment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  max_sales_bni: number;

  @ApiProperty({
    example: '13588',
    description: '1 normalized sales per segment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  sales: number;

  @ApiProperty({
    example: '13988',
    description: '2 normalized sales per segment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  sales_normalized: number;

  @ApiProperty({
    example: '13588',
    description: 'inventories per segment (units)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  inventories: number;

  @BelongsTo(() => Segment)
  segment: Segment;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
