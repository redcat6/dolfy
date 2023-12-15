import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateInstituteDto {
  @ApiProperty({ example: 'Russia', description: 'country of the institute' })
  @IsString({ message: 'country must be a string' })
  readonly country: string;

  @ApiProperty({ example: 'Moskow', description: 'city of the institute' })
  @IsString({ message: 'city must be a string' })
  readonly city: string;

  @ApiProperty({ example: 'MIPT', description: "institute's name" })
  @IsString({ message: 'name must be a string' })
  readonly name: string;

  @ApiProperty({
    example: '12/23-06-2022',
    description: 'number of the contract',
  })
  @IsString({ message: 'This must be a string' })
  readonly contract: string;

  @ApiProperty({ example: '1200', description: 'price' })
  @IsNumber({}, { message: 'This must be a number' })
  readonly price: number;

  @ApiProperty({
    example: '2022-12-03',
    description: 'date of contract expiration',
  })
  readonly date_expired: Date;

  @ApiProperty({
    example: 'free',
    description: 'comments',
  })
  @IsString({ message: 'comments must be a string' })
  readonly comments: string;
}
