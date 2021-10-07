import { IsOptional, IsString, Length } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(2, 240)
  texto: string;

  @IsOptional()
  @IsString()
  @Length(2, 10)
  emoji: string
}
