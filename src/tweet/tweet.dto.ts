import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsString()
  text: string;
}
