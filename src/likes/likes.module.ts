import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';

@Module({
  providers: [LikesService, PrismaService],
  controllers: [LikesController],
})
export class LikesModule {}
