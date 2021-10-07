import { Injectable, NotFoundException } from '@nestjs/common';
import { Tweet, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async findUnique(id: number): Promise<Tweet> {
    const tweet = await this.db.tweet.findUnique({
      where: { id },
    });

    if (!tweet) {
      throw new NotFoundException();
    }

    return tweet;
  }

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.db.tweet.create({ data });
  }

  async update(id: number): Promise<Tweet> {
    return this.db.tweet.update({
      where: {
        id: id,
      },
      data: {
        curtidas: {
          increment: 1,
        },
      },
    });
  }
}
