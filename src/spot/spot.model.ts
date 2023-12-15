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

interface SpotCreationAttrs {
  gameId: number;
  round: number;
  register_round: number;
  teamId: number;
  name: string;
  core_message: string; //enum
  advanced_feature: string; //enum
  price: string;
  value: string;
  objective: string;
  quality: number;
  trademarkId: number;
  segments: string[];
  channels: string[];
  investments: number;
  operations: number;
}

@Table({ tableName: 'spots' })
export class Spot extends Model<Spot, SpotCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '25', description: 'game id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  gameId: number;

  @ApiProperty({ example: '2', description: 'current round' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  round: number;

  @ApiProperty({ example: '2', description: 'round of registration' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  register_round: number;

  @ApiProperty({ example: '4', description: 'team id' })
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  teamId: number;

  @ApiProperty({
    example: 'Alpha bags spot',
    description: 'name of spot',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'classic', description: 'date of expiration' })
  @Column({
    type: DataType.ENUM,
    values: ['', 'design', 'material', 'manufacturing'],
    defaultValue: '',
  })
  core_message: string;

  @ApiProperty({ example: 'power bank', description: 'advanced feture' })
  @Column({
    type: DataType.ENUM,
    values: [
      '',
      'positioning tracker',
      'power bank',
      'missed items warning',
      'danger alarm',
      'fridge camera',
      'individual pictures',
      'against loss insurance',
      'environment friendly utilization',
      'charity profit sharing',
    ],
    defaultValue: '',
  })
  advanced_feature: string;

  @ApiProperty({ example: 'attractive', description: 'promotion about price' })
  @Column({ type: DataType.STRING, defaultValue: '' })
  price: string;

  @ApiProperty({ example: 'fun', description: 'main value in promotion' })
  @Column({
    type: DataType.ENUM,
    values: [
      'family',
      'attractiveness',
      'personality',
      'social_status',
      'fun',
      'friendship',
      'pets',
      'independent',
    ],
  })
  value: string;

  @ApiProperty({
    example: 'create demand',
    description: 'objective of the promotiom',
  })
  @Column({
    type: DataType.ENUM,
    values: [
      'create demand',
      'stimulate purchase',
      'maintain loyalty',
      'introduce brand',
    ],
  })
  objective: string;

  @ApiProperty({
    example: '3',
    description: "level of spot's quality (between 1 and 5)",
  })
  @Column({ type: DataType.INTEGER })
  quality: number;

  @ApiProperty({
    example: 7,
    description: 'id of the trademark',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '[Business, UltraFasion, School]',
    description: 'array of the segments names',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  segments: string[];

  @ApiProperty({
    example: '[TV, post mailing]',
    description: 'array of the ad channels',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  channels: string[];

  @ApiProperty({
    example: '3',
    description: 'investments to spot creation',
  })
  @Column({ type: DataType.REAL })
  investments: number;

  @ApiProperty({
    example: '3',
    description: 'spot operation costs',
  })
  @Column({ type: DataType.REAL })
  operations: number;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
