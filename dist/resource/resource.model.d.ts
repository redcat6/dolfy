import { Model } from 'sequelize-typescript';
import { Game } from 'src/game/game.model';
import { Team } from 'src/team/team.model';
interface ResourceCreationAttrs {
    gameId: number;
    teamId: number;
    round: number;
    capacities: number;
    capacities_increase: number;
    long_term_debt: number;
    borrowings: number;
    research_segments: string[];
    research_costs: number;
}
export declare class Resource extends Model<Resource, ResourceCreationAttrs> {
    id: number;
    gameId: number;
    teamId: number;
    round: number;
    capacities: number;
    capacities_increase: number;
    long_term_debt: number;
    borrowings: number;
    research_segments: string[];
    research_costs: number;
    game: Game;
    team: Team;
}
export {};
