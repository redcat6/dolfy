import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Institute } from 'src/institute/institute.model';

interface PromoCreationAttrs {
  code: string;
  user_name: string;
  instituteId: number;
}

@Table({ tableName: 'codes' })
export class Promo extends Model<Promo, PromoCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'riyuVV76Ngfd45', description: 'promo for usage' })
  @Column({ type: DataType.STRING, unique: true })
  code: string;

  @ApiProperty({ example: 'Ion Lupan', description: 'professor name' })
  @Column({ type: DataType.STRING, defaultValue: 'professor' })
  user_name: string;

  @ApiProperty({ example: 'Active', description: 'status of promo' })
  @Column({ type: DataType.STRING, defaultValue: 'Not used' })
  status: string;

  @ApiProperty({ example: '12', description: 'institute id' })
  @ForeignKey(() => Institute)
  @Column({ type: DataType.INTEGER })
  instituteId: number;

  @BelongsTo(() => Institute)
  institute: Institute;
}
