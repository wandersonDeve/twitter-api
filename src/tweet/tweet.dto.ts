import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsDate()
  updatedAt: Date;

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsString()
  text: string;
}
