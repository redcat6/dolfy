import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
interface SpotCreationAttrs {
    gameId: number;
    round: number;
    register_round: number;
    teamId: number;
    name: string;
    core_message: string;
    advanced_feature: string;
    price: string;
    value: string;
    objective: string;
    quality: number;
    trademarkId: number;
    segments: string[];
    channels: string[];
    investments: number;
    operations: number;
}
export declare class Spot extends Model<Spot, SpotCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    register_round: number;
    teamId: number;
    name: string;
    core_message: string;
    advanced_feature: string;
    price: string;
    value: string;
    objective: string;
    quality: number;
    trademarkId: number;
    segments: string[];
    channels: string[];
    investments: number;
    operations: number;
    team: Team;
    trademark: Trademark;
}
export {};
