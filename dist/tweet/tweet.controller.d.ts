import { Tweet } from '.prisma/client';
import { CreateTweetDto } from './tweet.dto';
import { TweetsService } from './tweet.service';
export declare class UsersController {
    private service;
    constructor(service: TweetsService);
    findUnique(id: Number): Promise<Tweet>;
    create(data: CreateTweetDto): Promise<Tweet>;
}
