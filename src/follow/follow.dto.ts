import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFollowDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  followedId: number;
}
