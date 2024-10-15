import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class signInDto {
  @IsEmail()
  @MaxLength(50)
  @MinLength(5)
  email: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}

export class signUpDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @MaxLength(50)
  @MinLength(5)
  email: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}
