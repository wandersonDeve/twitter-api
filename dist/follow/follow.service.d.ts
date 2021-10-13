import { PrismaService } from 'src/prisma.service';
import { CreateFollowDto } from './follow.dto';
import { Follow } from '.prisma/client';
export declare class FollowsService {
    private db;
    constructor(db: PrismaService);
    follow(data: CreateFollowDto, id: number): Promise<Follow>;
}
