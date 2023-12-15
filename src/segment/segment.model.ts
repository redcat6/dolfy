import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { AdvancedFeature } from 'src/advanced-features/advanced-features.model';
import { MarketSegment } from 'src/market-segment/market-segment.model';

interface SegmentCreationAttrs {
  name: string;
  category?: string;
  peak_size: number;
}

@Table({ tableName: 'segments' })
export class Segment extends Model<Segment, SegmentCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique segment identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'simple',
    description: 'category of segment',
  })
  @Column({
    type: DataType.ENUM,
    values: ['simple', 'standart', 'advanced'],
    defaultValue: 'standart',
  })
  category?: string;

  @ApiProperty({
    example: 'School',
    description: 'name of segment',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: '1520', description: 'peak size of segment' })
  @Column({ type: DataType.INTEGER })
  peak_size: number;

  @HasMany(() => MarketSegment)
  segment_params: MarketSegment[];

  @HasMany(() => AdvancedFeature)
  advanced_features: AdvancedFeature[];
  segment: any;
}
