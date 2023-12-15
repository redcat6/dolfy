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

interface ProductCreationAttrs {
  productId: string;
  gameId: number; //foring-key
  round: number;
  trademarkId: number; //foring-key
  model: string;
  available_from: number; //month
  available_till: number;
  material: number;
  manufacturing: number;
  design_type: string; //enum
  design: number;
  variations: number;
  advanced_feature: string; //enum
  sales_plan: number;
  production_plan: number;
  investments: number;
  unit_cost: number;
  retail_price: number;
  price: number;
  inventories_beginning: number;
  inventories_end: number;
  teamId: number; //foring-key
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
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

  @ApiProperty({
    example: '1err680kh',
    description: 'unique identifier table',
  })
  @Column({ type: DataType.STRING })
  productId: string;

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
    example: 'model 1',
    description: 'name of product model',
  })
  @Column({ type: DataType.STRING })
  model: string;

  @ApiProperty({
    example: '2',
    description: 'month when the product will be available',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  available_from: number;

  @ApiProperty({
    example: '12',
    description: 'month till the product will be available',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 12 })
  available_till: number;

  @ApiProperty({ example: '2', description: 'level of material quality' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  material: number;

  @ApiProperty({ example: '2', description: 'level of manufacturing quality' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  manufacturing: number;

  @ApiProperty({ example: '2', description: 'level of design quality' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  design: number;

  @ApiProperty({ example: 'business', description: 'type of design' })
  @Column({
    type: DataType.ENUM,
    values: ['classic', 'business', 'casual', 'innovative', 'art'],
  })
  design_type: string;

  @ApiProperty({ example: '1', description: 'variations of model' })
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  variations: number;

  @ApiProperty({
    example: 'positioning tracker',
    description: 'advanced feature of product',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: '',
  })
  advanced_feature: string;

  @ApiProperty({
    example: '12',
    description: 'sales plan',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  sales_plan: number;

  @ApiProperty({ example: '2', description: 'production plan' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  production_plan: number;

  @ApiProperty({ example: '2500', description: 'R&D spending' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  investments: number;

  @ApiProperty({ example: '25.3', description: 'cost of 1 product unit' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  unit_cost: number;

  @ApiProperty({ example: '48.2', description: 'recommended retail price' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  retail_price: number;

  @ApiProperty({ example: '45.8', description: 'ex-works price' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  price: number;

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

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
