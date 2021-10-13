import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFollowDto } from './follow.dto';
import { Follow } from '.prisma/client';

@Injectable()
export class FollowsService {
  constructor(private db: PrismaService) {}

  async follow(data: CreateFollowDto, id: number): Promise<Follow> {
    const existing = await this.db.follow.findUnique({ where: { id } });

    if (!existing) {
      await this.db.follow.create({
        data,
      });
    } else {
      return this.db.follow.delete({
        where: { id },
      });
    }
  }
}
