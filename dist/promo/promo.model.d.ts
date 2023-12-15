import { Model } from 'sequelize-typescript';
import { Institute } from 'src/institute/institute.model';
interface PromoCreationAttrs {
    code: string;
    user_name: string;
    instituteId: number;
}
export declare class Promo extends Model<Promo, PromoCreationAttrs> {
    id: number;
    code: string;
    user_name: string;
    status: string;
    instituteId: number;
    institute: Institute;
}
export {};
