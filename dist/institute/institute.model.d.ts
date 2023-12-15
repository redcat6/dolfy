import { Model } from 'sequelize-typescript';
import { Promo } from 'src/promo/promo.model';
interface InstituteCreationAttrs {
    country: string;
    city: string;
    name: string;
    faculty: string;
    contract: string;
    price: number;
    date_expired: Date;
    comments: string;
}
export declare class Institute extends Model<Institute, InstituteCreationAttrs> {
    id: number;
    country: string;
    city: string;
    name: string;
    faculty: string;
    contract: string;
    price: number;
    date_expired: Date;
    comments: string;
    codes: Promo[];
}
export {};
