import { CreateFollowDto } from './follow.dto';
import { FollowsService } from './follow.service';
import { Follow } from '.prisma/client';
export declare class FollowsController {
    private db;
    constructor(db: FollowsService);
    create(data: CreateFollowDto, id: number): Promise<Follow>;
}
