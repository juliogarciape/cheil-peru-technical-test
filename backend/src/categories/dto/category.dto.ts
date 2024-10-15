import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  name: string;

  @IsString()
  @MaxLength(200)
  @MinLength(5)
  description: string;
}
