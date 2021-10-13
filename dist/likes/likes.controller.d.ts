import { Like } from '.prisma/client';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';
export declare class LikesController {
    private like;
    constructor(like: LikesService);
    create(data: CreateLikeDto): Promise<Like>;
    delete(id: number): void;
}
