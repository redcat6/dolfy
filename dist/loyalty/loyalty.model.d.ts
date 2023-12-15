import { Model } from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
import { Trademark } from 'src/trademark/trademark.model';
interface LoyaltyCreationAttrs {
    gameId: number;
    round: number;
    trademarkId: number;
    segmentId: number;
}
export declare class Loyalty extends Model<Loyalty, LoyaltyCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    loyalty_prev: number;
    loyalty: number;
    trademarkId: number;
    segmentId: number;
    segment: Segment;
    trademark: Trademark;
}
export {};
