import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ChannelTrademark } from 'src/channel/channel-trademark.model';
import { Channel } from 'src/channel/channel.model';
import { Product } from 'src/product/product.model';

interface TrademarkCreationAttrs {
  name: string;
}

@Table({ tableName: 'trademarks' })
export class Trademark extends Model<Trademark, TrademarkCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique trademark identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Baggy',
    description: 'name of trademark',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Product)
  products: Product[];

  @BelongsToMany(() => Channel, () => ChannelTrademark)
  channels: Channel[];
}
