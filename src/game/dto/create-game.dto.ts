import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

enum gameCategory {
  'simple',
  'standart',
  'advanced',
}

export class CreateGameDto {
  @ApiProperty({ example: '12', description: 'user identifier' })
  @IsNumber({}, { message: 'userId must be a number' })
  readonly userId: number;

  @ApiProperty({
    example: 'standart',
    description: 'category of game: simple, standart or advanced',
  })
  @IsEnum(gameCategory)
  readonly category: string;

  @ApiProperty({
    example: '1 part group Eki-35',
    description: 'description of game',
  })
  @IsString({ message: 'This must be a string' })
  readonly description: string;
}
