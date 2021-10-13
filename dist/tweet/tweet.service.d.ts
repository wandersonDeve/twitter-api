import { Tweet, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class TweetsService {
    private db;
    constructor(db: PrismaService);
    findUnique(id: number): Promise<Tweet>;
    create(data: Prisma.TweetCreateInput): Promise<Tweet>;
    update(id: number, data: Prisma.TweetCreateInput): Promise<Tweet>;
}
