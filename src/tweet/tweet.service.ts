import {
  Injectable,
} from '@nestjs/common';
import { Tweet, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async findUnique(tweetId: Number): Promise<Tweet> {
    const tweet = await this.db.tweet.findUnique({
      where: { TweetId },
    });

    if (!tweet) {
      throw new NotFoundException();
    }

    return tweet;
  }

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    const tweet = await this.db.tweet.create({ data });
  }
}
