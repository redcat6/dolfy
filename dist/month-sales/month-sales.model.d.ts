import { Model } from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
import { Trademark } from 'src/trademark/trademark.model';
interface MonthSalesCreationAttrs {
    gameId: number;
    round: number;
    teamId: number;
    trademarkId: number;
    segmentId: number;
    productId: string;
    model: string;
    month: number;
}
export declare class MonthSales extends Model<MonthSales, MonthSalesCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    teamId: number;
    trademarkId: number;
    segmentId: number;
    productId: string;
    model: string;
    month: number;
    available_sales: number;
    capacity: number;
    offered_sale: number;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    max_sales_bi: number;
    max_sales_bsi: number;
    max_sales_bni: number;
    sales: number;
    sales_normalized: number;
    inventories: number;
    segment: Segment;
    trademark: Trademark;
}
export {};
