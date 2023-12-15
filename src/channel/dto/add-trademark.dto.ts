import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class addTrademarkDto {
  @ApiProperty({ example: '12', description: 'game identifier' })
  @IsNumber({}, { message: 'channel id must be a number' })
  readonly channelId: number;

  @ApiProperty({
    example: '0.5',
    description: 'name of trademark',
  })
  @IsString({ message: ' trademark must be a strings' })
  readonly trademark: string;
}
