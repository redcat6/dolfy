import { Model } from 'sequelize-typescript';
export declare class TeamUsers extends Model<TeamUsers> {
    id: number;
    userId: number;
    teamId: number;
}
