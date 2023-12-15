import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Trademark } from 'src/trademark/trademark.model';
import { Channel } from './channel.model';

@Table({ tableName: 'channel_trademarks' })
export class ChannelTrademark extends Model<ChannelTrademark> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '2',
    description: 'trademark identifier',
  })
  @ForeignKey(() => Trademark)
  @Column({ type: DataType.INTEGER })
  trademarkId: number;

  @ApiProperty({
    example: '2',
    description: 'channel identifier',
  })
  @ForeignKey(() => Channel)
  @Column({ type: DataType.INTEGER })
  channelId: number;
}
