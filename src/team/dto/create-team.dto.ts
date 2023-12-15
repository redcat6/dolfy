import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({ example: 'Alpha', description: 'name' })
  @IsString({ message: 'Team name must be a string' })
  readonly name: string;

  @ApiProperty({ example: '3', description: 'game id' })
  @IsNumber({}, { message: 'Game id must be a number' })
  readonly gameId: number;
}
