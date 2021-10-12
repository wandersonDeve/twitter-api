import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
