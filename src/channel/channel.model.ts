import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
import { ChannelTrademark } from './channel-trademark.model';

interface ChannelCreationAttrs {
  gameId: number;
  round: number;
  register_round: number;
  teamId: number;
  type: number;
  name: string;
  stores: number;
}

@Table({ tableName: 'channels' })
export class Channel extends Model<Channel, ChannelCreationAttrs> {
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
    description: 'game identifier',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  gameId: number;

  @ApiProperty({
    example: '12',
    description: 'current round',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  round: number;

  @ApiProperty({
    example: '12',
    description: 'round of the channel creation',
  })
  @Column({ type: DataType.INTEGER })
  register_round: number;

  @ApiProperty({
    example: '2',
    description: 'team identifier',
  })
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ApiProperty({
    example: '2',
    description: 'type of the channel',
  })
  @Column({ type: DataType.INTEGER })
  type: number;

  @ApiProperty({
    example: '12',
    description: 'channel name',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: '12',
    description: 'number of channel stores in the current game & current round',
  })
  @Column({ type: DataType.INTEGER })
  stores: number;

  @ApiProperty({
    example: '12',
    description: 'game identifier',
  })
  @Column({ type: DataType.REAL })
  peak_market_coverage: number;

  @ApiProperty({
    example: '12',
    description: 'investments costs (only for self channels)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  investment_costs: number;

  @ApiProperty({
    example: '12',
    description: 'operational costs (only for self channels)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  operational_costs: number;

  @ApiProperty({
    example: '12',
    description: 'sales in units (last year)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  sales_last: number;

  @ApiProperty({
    example: '12',
    description: 'franchise costs (only for franchise)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  franchise_cost: number;

  @ApiProperty({
    example: '12',
    description: 'franchise fee (only for franchise)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  franchise_fee: number;

  @ApiProperty({
    example: '12',
    description: 'entry fee (only for chains)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  entry_fee: number;

  @ApiProperty({
    example: '12',
    description: 'annual fee (only for chains)',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  annual_fee: number;

  @ApiProperty({
    example: '3',
    description:
      'number of trademarks (only for independent chains registered)',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  num_trademarks: number;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsToMany(() => Trademark, () => ChannelTrademark)
  trademarks: Trademark[];
}
