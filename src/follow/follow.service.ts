import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Follow, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FollowsService {
  constructor(private db: PrismaService) {}

  async findUnique(follows: string): Promise<Follow> {
    const follow = await this.db.follow.findUnique({
      where: {
        follows: follows,
      },
      include: {
        userId: {
          select: {
            username: true,
          },
        },
      },
    });
    return follow;
  }

  async create(data: Prisma.FollowCreateInput): Promise<Follow> {
    const existing = await this.db.follow.findUnique({
        where: { 
            data: {
                userId:{
                    id
                }
            }
    })

        if (existing){
            const follow = await this.db.follow.create({ data });
        } else {
            
        }

    return follow;
  }
}
