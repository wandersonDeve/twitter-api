import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { TweetsService } from './tweet.service';
import { TweetsController } from './tweet.controller';

@Module({
  providers: [TweetsService, PrismaService],
  controllers: [TweetsController],
})
export class TweetModule {}
