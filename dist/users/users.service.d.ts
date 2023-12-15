import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(id: number, user: UpdateUserDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
