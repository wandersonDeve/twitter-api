import { User } from '.prisma/client';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    findUnique(username: string): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    update(username: string, updateData: CreateUserDto): Promise<User>;
    deleteOne(id: number): Promise<User>;
}
