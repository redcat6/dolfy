import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Trademark } from 'src/trademark/trademark.model';

interface AwarenessCreationAttrs {
  gameId: number;
  round: number;
  trademarkId: number;
}

@Table({ tableName: 'brand_awareness' })
export class Awareness extends Model<Awareness, AwarenessCreationAttrs> {
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
    description: 'game id',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  gameId: number;

  @ApiProperty({
    example: '2',
    description: 'current round',
  })
  @Column({ type: DataType.INTEGER, primaryKey: true })
  round: number;

  @ApiProperty({
    example: '0.5',
    description: 'brand awareness last round',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  awareness_prev: number;

  @ApiProperty({
    example: '0.5',
    description: 'brand awareness current round',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  awareness: number;

  @ApiProperty({
    example: '1',
    description: 'trademark id',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
