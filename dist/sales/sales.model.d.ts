import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
interface SalesCreationAttrs {
    gameId: number;
    round: number;
    teamId: number;
    trademarkId: number;
    productId: string;
    model: string;
    production_plan: number;
    sales_units: number;
    sales: number;
    inventories_beginning: number;
    inventories_end: number;
    channels: string[];
    channels_sales: number[];
    channels_sales_cash: number[];
    channels_promotion: number[];
}
export declare class Sales extends Model<Sales, SalesCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    teamId: number;
    trademarkId: number;
    productId: string;
    model: string;
    production_plan: number;
    sales_units: number;
    sales: number;
    inventories_beginning: number;
    inventories_end: number;
    channels: string[];
    channels_sales: number[];
    channels_sales_cash: number[];
    channels_promotion: number[];
    team: Team;
    trademark: Trademark;
}
export {};
