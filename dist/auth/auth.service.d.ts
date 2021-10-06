import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthResponse, LoginDto } from './auth.dto';
export declare class AuthService {
    private db;
    private jwt;
    constructor(db: PrismaService, jwt: JwtService);
    login(data: LoginDto): Promise<AuthResponse>;
}
