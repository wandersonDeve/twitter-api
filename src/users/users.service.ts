import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findUnique(username: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
