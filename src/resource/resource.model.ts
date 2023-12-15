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

interface ResourceCreationAttrs {
  gameId: number;
  teamId: number;
  round: number;
  capacities: number;
  capacities_increase: number;
  long_term_debt: number;
  borrowings: number;
  research_segments: string[];
  research_costs: number;
}

@Table({ tableName: 'resources' })
export class Resource extends Model<Resource, ResourceCreationAttrs> {
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
    example: '2',
    description: 'team capacities for current round',
  })
  @Column({ type: DataType.INTEGER })
  capacities: number;

  @ApiProperty({ example: '2', description: 'team capacities for next round' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  capacities_increase: number;

  @ApiProperty({
    example: '15000',
    description: 'current long-term dept',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  long_term_debt: number;

  @ApiProperty({
    example: '2',
    description: 'borrowings',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  borrowings: number;

  @ApiProperty({
    example: '2',
    description: 'array of the segmments for resarch (max 2 per round)',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: null })
  research_segments: string[];

  @ApiProperty({
    example: '2',
    description: 'research costs',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  research_costs: number;

  @BelongsTo(() => Game)
  game: Game;

  @BelongsTo(() => Team)
  team: Team;
}
