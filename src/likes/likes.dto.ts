import { IsOptional } from 'class-validator';

export class CreateLikeDto {
  @IsOptional()
  userId: number;

  @IsOptional()
  tweetId: number;
}
