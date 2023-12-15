import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.model';
import { Game } from 'src/game/game.model';
import { Product } from 'src/product/product.model';
import { Resource } from 'src/resource/resource.model';
import { Spot } from 'src/spot/spot.model';

interface TeamCreationAttrs {
  name: string;
  gameId: number;
}

@Table({ tableName: 'teams' })
export class Team extends Model<Team, TeamCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Alpha', description: 'team name' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: '1', description: 'the game identifier' })
  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER })
  gameId: number;

  @BelongsTo(() => Game)
  game: Game;

  @HasMany(() => Product)
  products: Product[];

  @HasMany(() => Channel)
  channels: Channel[];

  @HasMany(() => Resource)
  resources: Resource[];

  @HasMany(() => Spot)
  spots: Spot[];
}
