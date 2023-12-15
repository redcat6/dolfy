import { Token } from './token.model';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
export declare class TokenService {
    private tokenRepository;
    private jwtService;
    private userService;
    constructor(tokenRepository: typeof Token, jwtService: JwtService, userService: UsersService);
    generateTokens(payload: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    saveToken({ userId, token }: {
        userId: any;
        token: any;
    }): Promise<Token>;
    refreshToken(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: User;
    }>;
    removeToken(refreshToken: string): Promise<Token>;
    validateAccessToken(token: string): Promise<any>;
    validateRefreshToken(token: string): Promise<any>;
}
