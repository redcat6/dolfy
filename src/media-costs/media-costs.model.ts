import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Game } from 'src/game/game.model';

interface MediaCostsCreationAttrs {
  gameId: number; //foreing key
  round: number;
  smm: number;
  content_ads: number;
  bloggers_influencers: number;
  postal: number;
  outdoor_advertising: number;
  autoradio_podcasts: number;
  tv: number;
}

@Table({ tableName: 'media_costs' })
export class MediaCosts extends Model<MediaCosts, MediaCostsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '5', description: 'game id' })
  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER, allowNull: false })
  gameId: number;

  @ApiProperty({ example: '2', description: 'current round' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  round: number;

  @ApiProperty({ example: '0.003', description: 'smm impression cost' })
  @Column({ type: DataType.REAL })
  smm: number;

  @ApiProperty({ example: '0.002', description: 'content ads impression cost' })
  @Column({ type: DataType.REAL })
  content_ads: number;

  @ApiProperty({
    example: '0.05',
    description: 'bloggers&influencers impression cost',
  })
  @Column({ type: DataType.REAL })
  bloggers_influencers: number;

  @ApiProperty({ example: '0.4', description: 'postal mail cost' })
  @Column({ type: DataType.REAL })
  postal: number;

  @ApiProperty({
    example: '90000',
    description: 'outdoor advertising campain cost',
  })
  @Column({ type: DataType.REAL })
  outdoor_advertising: number;

  @ApiProperty({
    example: '40000',
    description: 'autoradio podcasts campain cost',
  })
  @Column({ type: DataType.REAL })
  autoradio_podcasts: number;

  @ApiProperty({
    example: '170000',
    description: 'tv campain cost',
  })
  @Column({ type: DataType.REAL })
  tv: number;
}
