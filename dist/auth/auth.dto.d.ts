import { User } from '.prisma/client';
export declare class LoginDto {
    username: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    user: User;
}
