import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsNumber()
  @IsOptional()
  userId: number;

  @IsString()
  text: string;
}
