import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(100)
  @MinLength(5)
  name: string;

  @IsString()
  @MaxLength(1000)
  @MinLength(10)
  description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  stock: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  categoryId: number;
}
