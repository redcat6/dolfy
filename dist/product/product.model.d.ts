import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
interface ProductCreationAttrs {
    productId: string;
    gameId: number;
    round: number;
    trademarkId: number;
    model: string;
    available_from: number;
    available_till: number;
    material: number;
    manufacturing: number;
    design_type: string;
    design: number;
    variations: number;
    advanced_feature: string;
    sales_plan: number;
    production_plan: number;
    investments: number;
    unit_cost: number;
    retail_price: number;
    price: number;
    inventories_beginning: number;
    inventories_end: number;
    teamId: number;
}
export declare class Product extends Model<Product, ProductCreationAttrs> {
    id: number;
    productId: string;
    gameId: number;
    round: number;
    teamId: number;
    trademarkId: number;
    model: string;
    available_from: number;
    available_till: number;
    material: number;
    manufacturing: number;
    design: number;
    design_type: string;
    variations: number;
    advanced_feature: string;
    sales_plan: number;
    production_plan: number;
    investments: number;
    unit_cost: number;
    retail_price: number;
    price: number;
    inventories_beginning: number;
    inventories_end: number;
    team: Team;
    trademark: Trademark;
}
export {};
