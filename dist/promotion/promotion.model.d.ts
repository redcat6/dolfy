import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
interface PromotionCreationAttrs {
    gameId: number;
    round: number;
    teamId: number;
    name: string;
    trademarkId: number;
    cashback: number;
    gift_cost: number;
}
export declare class Promotion extends Model<Promotion, PromotionCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    teamId: number;
    name: string;
    cashback: number;
    trademarkId: number;
    gift_cost: number;
    team: Team;
    trademark: Trademark;
}
export {};
