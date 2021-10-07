import { Tweet } from '.prisma/client';
import { CreateTweetDto } from './tweet.dto';
import { TweetsService } from './tweet.service';
export declare class TweetsController {
    private service;
    constructor(service: TweetsService);
    findUnique(id: number): Promise<Tweet>;
    create(data: CreateTweetDto): Promise<Tweet>;
    update(id: number): Promise<Tweet>;
}
