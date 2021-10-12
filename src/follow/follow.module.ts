import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowController } from './follow.controller';

@Module({
  providers: [FollowService, PrismaService],
  controllers: [FollowController],
})
export class FollowModule {}
