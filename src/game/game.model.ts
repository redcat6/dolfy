import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { User } from 'src/users/users.model';

interface GameCreationAttrs {
  category: string;
  num_teams: number;
  rounds: number;
  description: string;
  userId: number;
}

@Table({ tableName: 'games' })
export class Game extends Model<Game, GameCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'current game round' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  round: number;

  @ApiProperty({ example: '1', description: 'rounds number of the game' })
  @Column({ type: DataType.INTEGER, defaultValue: 6 })
  rounds: number;

  @ApiProperty({ example: '5', description: 'number of the teams of the game' })
  @Column({ type: DataType.INTEGER, defaultValue: 5 })
  num_teams: number;

  @ApiProperty({
    example: 'standart',
    description:
      'one of the category  of game: simple, standart, advanced. game_id == segment category',
  })
  @Column({
    type: DataType.ENUM,
    values: ['simple', 'standart', 'advanced'],
    defaultValue: 'standart',
  })
  category: string;

  @ApiProperty({
    example: 'game for group Eki05 H1 2023',
    description: 'description of game',
  })
  @Column({ type: DataType.STRING })
  description: string;

  @ApiProperty({
    example: '2',
    description: 'identifier of professor who created the game',
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Team)
  teams: Team[];
}
