import { Like } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './likes.dto';
export declare class LikesService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateLikeDto): Promise<Like>;
    delete(id: number): Promise<Like>;
}
