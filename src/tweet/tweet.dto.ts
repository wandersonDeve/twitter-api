import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(2, 240)
  texto: string;

  @IsOptional()
  @Length(2, 10)
  emoji: string;

  @IsOptional()
  @IsNumber()
  curtidas: number;

  @IsOptional()
  autorId: string;
}
