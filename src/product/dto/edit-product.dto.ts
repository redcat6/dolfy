import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class EditProductDto {
  @ApiProperty({ example: '1', description: 'level of material quality' })
  @IsNumber({}, { message: 'material must be a number' })
  material: number;

  @ApiProperty({ example: '1', description: 'level of manufacturing quality' })
  @IsNumber({}, { message: 'manufacturing must be a number' })
  manufacturing: number;

  @ApiProperty({ example: '1', description: 'number of model variations' })
  @IsNumber({}, { message: 'variations must be a number' })
  variations: number;

  @ApiProperty({
    example: 'individual pictures',
    description: 'advanced feature name',
  })
  @IsString({ message: 'advenced feature  must be a string' })
  advanced_feature: string;

  @ApiProperty({
    example: '1',
    description: 'number of month to available the product',
  })
  @IsNumber({}, { message: 'available (from) must be a number' })
  available_from: number;

  @ApiProperty({
    example: '1',
    description: 'number of month till the product available',
  })
  @IsNumber({}, { message: 'available (till) must be a number' })
  available_till: number;
}
