import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private db;
    constructor(db: PrismaService);
    validate(payload: {
        username: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
