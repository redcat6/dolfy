import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.model';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { TokenService } from 'src/token/token.service';
export declare class AuthService {
    private userService;
    private tokenService;
    private SALT;
    constructor(userService: UsersService, tokenService: TokenService);
    login(userDto: LoginUserDto): Promise<{
        user: User;
        accessToken: string;
        refreshToken: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        user: User;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<import("../token/token.model").Token>;
    private validateUser;
}
