import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findUnique(username: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const existing = await this.db.user.findUnique({
      where: { username: data.username },
    });

    if (existing) {
      throw new ConflictException('username already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return user;
  }

  async update(username: string, data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.update({
      data,
      where: {
        username: username,
      },
    });
  }

  async deleteOne(username: string): Promise<User> {
    return this.db.user.delete({
      where: { username },
    });
  }
}
