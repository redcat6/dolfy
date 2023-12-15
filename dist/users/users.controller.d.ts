import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    update(updateUserDto: UpdateUserDto, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
