import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateMediaCostsDto {
  @ApiProperty({ example: '10', description: 'game identifier' })
  @IsNumber({}, { message: 'game id must be a number' })
  gameId: number;

  @ApiProperty({ example: '1', description: 'current round of the game' })
  @IsNumber({}, { message: 'round must be a number' })
  round: number;

  @ApiProperty({ example: '0.004', description: 'smm impression cost' })
  @IsNumber({}, { message: 'smm must be a number' })
  smm: number;

  @ApiProperty({ example: '0.002', description: 'content ads impression cost' })
  @IsNumber({}, { message: 'content_ads must be a number' })
  content_ads: number;

  @ApiProperty({
    example: '0.003',
    description: 'bloggers&influencers impression cost',
  })
  @IsNumber({}, { message: 'bloggers_influencers must be a number' })
  bloggers_influencers: number;

  @ApiProperty({ example: '0.05', description: 'postal mail cost' })
  @IsNumber({}, { message: 'smm must be a number' })
  postal: number;

  @ApiProperty({
    example: '90000',
    description: 'outdoor advertising compain cost',
  })
  @IsNumber({}, { message: 'outdoor_advertising must be a number' })
  outdoor_advertising: number;

  @ApiProperty({
    example: '45000',
    description: 'autoradio podcasts compain cost',
  })
  @IsNumber({}, { message: 'autoradio_podcasts must be a number' })
  autoradio_podcasts: number;

  @ApiProperty({ example: '0.04', description: 'tv compain cost' })
  @IsNumber({}, { message: 'tv must be a number' })
  tv: number;
}
