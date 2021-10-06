import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    login(data: LoginDto): Promise<AuthResponse>;
}
