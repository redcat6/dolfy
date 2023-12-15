import { Model } from 'sequelize-typescript';
interface ChainCreationAttrs {
    name: string;
    gameId: number;
    type: string;
    stores: number;
    peak_market_coverage: number;
    entry_fee: number;
    annual_fee: number;
    max_price: number;
    min_price: number;
    num_trademarks: number;
    retail_margin: number;
    design_main: string;
    design_second: string;
}
export declare class Chain extends Model<Chain, ChainCreationAttrs> {
    id: number;
    gameId: number;
    name: string;
    type: string;
    stores: number;
    peak_market_coverage: number;
    entry_fee: number;
    annual_fee: number;
    max_price: number;
    min_price: number;
    num_trademarks: number;
    retail_margin: number;
    design_main: string;
    design_second: string;
}
export {};
