import { Model } from 'sequelize-typescript';
import { Trademark } from 'src/trademark/trademark.model';
interface AwarenessCreationAttrs {
    gameId: number;
    round: number;
    trademarkId: number;
}
export declare class Awareness extends Model<Awareness, AwarenessCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    awareness_prev: number;
    awareness: number;
    trademarkId: number;
    trademark: Trademark;
}
export {};
