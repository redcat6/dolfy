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

interface FinancesCreationAttrs {
  gameId: number;
  teamId: number;
  round: number;
  fixed_assets: number;
  accumulated_depreciation: number;
  cash: number;
  inventories: number;
  contributed_capital: number;
  retained_profit: number;
  long_term_debt: number;
  growth_finances: number;
  sales: number;
  less_promo: number;
  other_incomes: number;
  CoGs: number;
  ga_expenses: number;
  ms_expenses: number;
  rd_expenses: number;
  depreciation: number;
  interests: number;
  investments: number;
  borrowings: number;
  assum_writte_off: number;
}

@Table({ tableName: 'finances' })
export class Finances extends Model<Finances, FinancesCreationAttrs> {
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
  @Column({ type: DataType.INTEGER })
  round: number;

  @ApiProperty({
    example: '2',
    description: 'team fixed assets',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  fixed_assets: number;

  @ApiProperty({
    example: '225.8',
    description: 'team accumulated depreciation',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  accumulated_depreciation: number;

  @ApiProperty({
    example: '22345.8',
    description: 'team cash',
  })
  @Column({ type: DataType.REAL })
  cash: number;

  @ApiProperty({ example: '2', description: 'inventories in $' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  inventories: number;

  @ApiProperty({
    example: '10000.0',
    description: 'team contributed capital',
  })
  @Column({ type: DataType.REAL })
  contributed_capital: number;

  @ApiProperty({
    example: '2377.1',
    description: 'retained profit',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  retained_profit: number;

  @ApiProperty({
    example: '15000',
    description: 'current long-term dept',
  })
  @Column({ type: DataType.REAL })
  long_term_debt: number;

  @ApiProperty({
    example: '15000',
    description: 'growth finances',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  growth_finances: number;

  @ApiProperty({
    example: '2',
    description: 'team sales',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  sales: number;

  @ApiProperty({
    example: '2',
    description: 'team sales',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  less_promo: number;

  @ApiProperty({
    example: '2',
    description: 'team sales',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  other_incomes: number;

  @ApiProperty({
    example: '2',
    description: 'team CoGs',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  CoGs: number;

  @ApiProperty({
    example: '2766',
    description: 'G&A expenses',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  ga_expenses: number;

  @ApiProperty({
    example: '2531',
    description: 'M&S expenses',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  ms_expenses: number;

  @ApiProperty({
    example: '23466',
    description: 'R&D expenses',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  rd_expenses: number;

  @ApiProperty({
    example: '2',
    description: 'team depreciation',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  depreciation: number;

  @ApiProperty({
    example: '2.5',
    description: 'interests current round',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  interests: number;

  @ApiProperty({
    example: '20000',
    description: 'investments',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  investments: number;

  @ApiProperty({
    example: '2',
    description: 'research costs',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  borrowings: number;

  @ApiProperty({
    example: '2',
    description: 'assum writte_off',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  accum_write_off: number;

  @BelongsTo(() => Team)
  team: Team;
}
