import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
export declare class Token extends Model {
    id: number;
    token: string;
    userId: number;
    user: User;
}
