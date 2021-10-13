import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { FollowsService } from './follow.service';
import { FollowsController } from './follow.controller';

@Module({
  providers: [FollowsService, PrismaService],
  controllers: [FollowsController],
})
export class FollowModule {}
