import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Team } from './team.model';

@Table({ tableName: 'team_users', createdAt: false, updatedAt: false })
export class TeamUsers extends Model<TeamUsers> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'user_identifier' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: '2', description: 'team identifier' })
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;
}
