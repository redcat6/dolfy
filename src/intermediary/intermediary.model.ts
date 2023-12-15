import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Game } from 'src/game/game.model';
import { Team } from 'src/team/team.model';

interface IntermediaryCreationAttrs {
  gameId: number;
  teamId: number;
  round: number;
  production_assets: number;
  retail_assets: number;
  production_depreciation: number;
  retail_depreciation: number;
  franchise_cost: number;
  franchise_fee: number;
  retail_entry: number;
  retail_annual_fee: number;
  invest_assets: number;
  invest_retail: number;
  market_research: number;
  invest_promo: number;
  running_promo: number;
  inventories: number;
  inventories_writte_off: number;
}

@Table({ tableName: 'intermediary_indicators' })
export class Intermediary extends Model<
  Intermediary,
  IntermediaryCreationAttrs
> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'the game identifier' })
  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER })
  gameId: number;

  @ApiProperty({ example: '1', description: 'the team identifier' })
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ApiProperty({ example: '2', description: 'current round' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  round: number;

  @ApiProperty({
    example: '2000',
    description: 'team production assets',
  })
  @Column({ type: DataType.REAL })
  production_assets: number;

  @ApiProperty({
    example: '22500.8',
    description: 'team retail assets',
  })
  @Column({ type: DataType.REAL })
  retail_assets: number;

  @ApiProperty({
    example: '22345.8',
    description: 'team production depreciation',
  })
  @Column({ type: DataType.REAL })
  production_depreciation: number;

  @ApiProperty({ example: '2456', description: 'retail depreciation' })
  @Column({ type: DataType.REAL })
  retail_depreciation: number;

  @ApiProperty({
    example: '10000.0',
    description: 'team franchise sales',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  franchise_cost: number;

  @ApiProperty({
    example: '2377.1',
    description: 'franchise fee',
  })
  @Column({ type: DataType.REAL })
  franchise_fee: number;

  @ApiProperty({
    example: '15000',
    description: 'retail entry',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  retail_entry: number;

  @ApiProperty({
    example: '2',
    description: 'retail annual fee',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  retail_annual_fee: number;

  @ApiProperty({
    example: '2000',
    description: 'team invest assets',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  invest_assets: number;

  @ApiProperty({
    example: '2000',
    description: 'team retail invest',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  invest_retail: number;

  @ApiProperty({
    example: '2000',
    description: 'team retail lost',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  retail_writte_off: number;

  @ApiProperty({
    example: '2000',
    description: 'team retail operation costs',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  operate_retail: number;

  @ApiProperty({
    example: '2',
    description: 'team market research',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  market_research: number;

  @ApiProperty({
    example: '2000',
    description: 'team invest promotion',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  invest_promo: number;

  @ApiProperty({
    example: '2000',
    description: 'team running promotion',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  running_promo: number;

  @ApiProperty({
    example: '2000',
    description: 'team invetories current round',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  inventories: number;

  @ApiProperty({
    example: '2000',
    description: 'team inventories of the updated models by end of the period',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  inventories_writte_off: number;

  @BelongsTo(() => Team)
  team: Team;
}
