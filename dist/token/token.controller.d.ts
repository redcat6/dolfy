import { Request, Response } from 'express';
import { TokenService } from './token.service';
export declare class TokenController {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("../users/users.model").User;
    }>;
}
