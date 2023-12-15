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

interface PromotionCreationAttrs {
  gameId: number;
  round: number;
  teamId: number; //foreing key
  name: string;
  trademarkId: number; //foreing key
  cashback: number;
  gift_cost: number;
}

@Table({ tableName: 'promotions' })
export class Promotion extends Model<Promotion, PromotionCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '5', description: 'game id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  gameId: number;

  @ApiProperty({ example: '2', description: 'current round' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  round: number;

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

  @ApiProperty({ example: '0.05', description: 'cash back, 5%' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  cashback: number;

  @ApiProperty({
    example: 7,
    description: 'id of the trademark',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '35',
    description: 'gift cost',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  gift_cost: number;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
