import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSegmentDto {
  @ApiProperty({ example: 'simple', description: 'category of segment' })
  @IsString({ message: 'Segment category must be a string' })
  readonly category: string;

  @ApiProperty({ example: 'Business', description: 'name of segment' })
  @IsString({ message: 'This must be a string' })
  readonly name: string;

  @ApiProperty({ example: '1250', description: 'peak size of segment' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly peak_size: number;
}
