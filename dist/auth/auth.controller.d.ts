import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { User } from 'src/users/users.model';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: User;
    }>;
    registration(userDto: CreateUserDto, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: User;
    }>;
    createUser(userDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: User;
    }>;
    logout(req: Request, res: Response): Promise<string>;
}
