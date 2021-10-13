import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './likes.dto';

@Injectable()
export class LikesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateLikeDto): Promise<Like> {
    return this.db.like.create({ data });
  }

  async delete(id: number): Promise<Like> {
    const existing = this.db.like.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException();
    }

    return this.db.like.delete({
      where: { id },
    });
  }
}
