import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
  name: string;
  phone: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@mail.com', description: 'user email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'Sdkg8334kbo4st', description: 'user password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: 'ADMIN',
    description: 'user role: TEAM, ADMIN, PROFESSOR',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'TEAM',
  })
  role: string;

  @ApiProperty({ example: 'Lupu Ion', description: 'name of user' })
  @Column({ type: DataType.STRING, defaultValue: '' })
  name: string;

  @ApiProperty({ example: '+373 60080045', description: 'phone of user' })
  @Column({ type: DataType.STRING, defaultValue: '' })
  phone: string;

  @ApiProperty({
    example: 'false / true',
    description: 'activate user his account by activation link or not',
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActivated: boolean;

  @ApiProperty({
    example: '2',
    description: 'id of the professor promocode',
  })
  @Column({ type: DataType.INTEGER, defaultValue: null })
  promoId: number;
}
