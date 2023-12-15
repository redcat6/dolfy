import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Promo } from 'src/promo/promo.model';

interface InstituteCreationAttrs {
  country: string;
  city: string;
  name: string;
  faculty: string;
  contract: string;
  price: number;
  date_expired: Date;
  comments: string;
}

@Table({ tableName: 'institutes' })
export class Institute extends Model<Institute, InstituteCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Russia', description: 'country' })
  @Column({ type: DataType.STRING })
  country: string;

  @ApiProperty({ example: 'Moskow', description: 'city' })
  @Column({ type: DataType.STRING })
  city: string;

  @ApiProperty({ example: 'ULIM', description: 'name of institute' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Economic', description: 'faculty of institute' })
  @Column({ type: DataType.STRING, unique: true, defaultValue: '' })
  faculty: string;

  @ApiProperty({
    example: '125/05-02-2022',
    description: 'number of the contract',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  contract: string;

  @ApiProperty({ example: '152', description: 'price' })
  @Column({ type: DataType.REAL, defaultValue: 0 })
  price: number;

  @ApiProperty({ example: '2.10.2022', description: 'date of expiration' })
  @Column({ type: DataType.DATE, allowNull: false })
  date_expired: Date;

  @ApiProperty({
    example: 'something about the contract',
    description: 'comments',
  })
  @Column({ type: DataType.STRING, defaultValue: '' })
  comments: string;

  @HasMany(() => Promo)
  codes: Promo[];
}
