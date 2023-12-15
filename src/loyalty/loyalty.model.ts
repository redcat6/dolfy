import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
import { Trademark } from 'src/trademark/trademark.model';

interface LoyaltyCreationAttrs {
  gameId: number;
  round: number;
  trademarkId: number;
  segmentId: number;
}

@Table({ tableName: 'brand_loyalty' })
export class Loyalty extends Model<Loyalty, LoyaltyCreationAttrs> {
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
    description: 'brand loyalty',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  loyalty_prev: number;

  @ApiProperty({
    example: '0.5',
    description: 'brand loyalty',
  })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  loyalty: number;

  @ApiProperty({
    example: '1',
    description: 'trademark id',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '12',
    description: 'segment id',
  })
  @ForeignKey(() => Segment)
  @Column({ type: DataType.INTEGER })
  segmentId: number;

  @BelongsTo(() => Segment)
  segment: Segment;

  @BelongsTo(() => Trademark)
  trademark: Trademark;
}
