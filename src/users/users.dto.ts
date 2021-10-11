import { IsString, Length, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsString()
  @Length(4, 30)
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsString()
  @Length(8, 16)
  password: string;

  @IsString()
  @Length(2, 40)
  displayName: string;

  @IsString()
  birth: string;

  @IsString()
  bio: string;
}
