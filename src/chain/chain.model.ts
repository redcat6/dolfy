import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ChainCreationAttrs {
  name: string;
  gameId: number;
  type: string;
  stores: number;
  peak_market_coverage: number;
  entry_fee: number;
  annual_fee: number;
  max_price: number;
  min_price: number;
  num_trademarks: number;
  retail_margin: number;
  design_main: string;
  design_second: string;
}

@Table({ tableName: 'independent_chains' })
export class Chain extends Model<Chain, ChainCreationAttrs> {
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
      'game identifier. id 1000 - standart game, 1001 - advanced game 1002 - simple game',
  })
  @Column({ type: DataType.INTEGER })
  gameId: number;

  @ApiProperty({ example: 'Wildberries', description: 'name of chain' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'online',
    description: 'type of chain: online or brick&mortar',
  })
  @Column({ type: DataType.ENUM, values: ['online', 'brick&mortar'] })
  type: string;

  @ApiProperty({ example: '15', description: 'number of chain stores' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  stores: number;

  @ApiProperty({
    example: '456',
    description: 'peak market coverage of the chain',
  })
  @Column({ type: DataType.INTEGER })
  peak_market_coverage: number;

  @ApiProperty({ example: '1234.6', description: 'fee to entry to chain' })
  @Column({ type: DataType.REAL })
  entry_fee: number;

  @ApiProperty({ example: '534.5', description: 'chain annual fee' })
  @Column({ type: DataType.REAL })
  annual_fee: number;

  @ApiProperty({
    example: '150',
    description: 'max preferable price for the chain',
  })
  @Column({ type: DataType.REAL })
  max_price: number;

  @ApiProperty({
    example: '45',
    description: 'min preferable price for the chain',
  })
  @Column({ type: DataType.REAL })
  min_price: number;

  @ApiProperty({ example: '3', description: 'number of trademarks' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  num_trademarks: number;

  @ApiProperty({ example: '15.5', description: 'target retail margin' })
  @Column({ type: DataType.REAL })
  retail_margin: number;

  @ApiProperty({
    example: 'classic',
    description: 'main design of chain',
  })
  @Column({
    type: DataType.ENUM,
    values: ['classic', 'business', 'casual', 'innovative', 'art'],
  })
  design_main: string;

  @ApiProperty({
    example: 'art',
    description: 'second chain design',
  })
  @Column({
    type: DataType.ENUM,
    values: ['classic', 'business', 'casual', 'innovative', 'art'],
  })
  design_second: string;
}
