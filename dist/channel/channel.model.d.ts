import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { Trademark } from 'src/trademark/trademark.model';
interface ChannelCreationAttrs {
    gameId: number;
    round: number;
    register_round: number;
    teamId: number;
    type: number;
    name: string;
    stores: number;
}
export declare class Channel extends Model<Channel, ChannelCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    register_round: number;
    teamId: number;
    type: number;
    name: string;
    stores: number;
    peak_market_coverage: number;
    investment_costs: number;
    operational_costs: number;
    sales_last: number;
    franchise_cost: number;
    franchise_fee: number;
    entry_fee: number;
    annual_fee: number;
    num_trademarks: number;
    team: Team;
    trademarks: Trademark[];
}
export {};
