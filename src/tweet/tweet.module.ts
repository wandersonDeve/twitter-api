import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';

@Module({
  providers: [TweetService, PrismaService],
  controllers: [TweetController],
})
export class TweetModule {}
