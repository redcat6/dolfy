import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
import { User } from 'src/users/users.model';
interface GameCreationAttrs {
    category: string;
    num_teams: number;
    rounds: number;
    description: string;
    userId: number;
}
export declare class Game extends Model<Game, GameCreationAttrs> {
    id: number;
    round: number;
    rounds: number;
    num_teams: number;
    category: string;
    description: string;
    userId: number;
    user: User;
    teams: Team[];
}
export {};
