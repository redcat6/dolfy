import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';

interface SalesCreationAttrs {
  gameId: number;
  round: number;
  teamId: number; //foring-key
  trademarkId: number; //foring-key
  productId: string;
  model: string;
  production_plan: number;
  sales_units: number;
  sales: number; //sales in cash
  inventories_beginning: number;
  inventories_end: number;
  channels: string[];
  channels_sales: number[];
  channels_sales_cash: number[];
  channels_promotion: number[];
}

@Table({ tableName: 'sales' })
export class Sales extends Model<Sales, SalesCreationAttrs> {
  @ApiProperty({
    example: '100',
    description: 'unique table identifier',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1000', description: 'game identifier' })
  @Column({ type: DataType.INTEGER })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of game' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  round: number;

  @ApiProperty({ example: '4', description: 'team identifier' })
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ApiProperty({ example: '12', description: 'id of trademark' })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '1err680kh',
    description: 'unique product identifier',
  })
  @Column({ type: DataType.STRING })
  productId: string;

  @ApiProperty({
    example: 'model 1',
    description: 'name of product model',
  })
  @Column({ type: DataType.STRING })
  model: string;

  @ApiProperty({ example: '2000', description: 'production plan' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  production_plan: number;

  @ApiProperty({
    example: '2500',
    description: 'sold product per year in units',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  sales_units: number;

  @ApiProperty({ example: '2', description: 'sold product per year in cash' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  sales: number; //sales in cash

  @ApiProperty({
    example: '2000',
    description: 'inventories disposal volume beginning',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  inventories_beginning: number;

  @ApiProperty({
    example: '2000',
    description: 'inventories disposal volume end',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  inventories_end: number;

  @ApiProperty({
    example: '[Alpha store, Betta brick&mortar store]',
    description: "channels' names array where product was sold",
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  channels: string[];

  @ApiProperty({
    example: '[250, 1520]',
    description: 'array of the sales in units (product sold by channels)',
  })
  @Column({ type: DataType.ARRAY(DataType.REAL), defaultValue: [] })
  channels_sales: number[];

  @ApiProperty({
    example: '[250, 1520]',
    description: 'array of the sales in cash (product sold by channels)',
  })
  @Column({ type: DataType.ARRAY(DataType.REAL), defaultValue: [] })
  channels_sales_cash: number[];

  @ApiProperty({
    example: '[250, 1520]',
    description:
      'array of the sales promotions (cashback & gift_cost) by channels',
  })
  @Column({ type: DataType.ARRAY(DataType.REAL), defaultValue: [] })
  channels_promotion: number[];

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
