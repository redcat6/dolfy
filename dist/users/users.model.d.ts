import { Model } from 'sequelize-typescript';
interface UserCreationAttrs {
    email: string;
    password: string;
    name: string;
    phone: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    role: string;
    name: string;
    phone: string;
    isActivated: boolean;
    promoId: number;
}
export {};
