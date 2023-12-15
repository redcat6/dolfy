import { Model } from 'sequelize-typescript';
import { Team } from 'src/team/team.model';
interface IntermediaryCreationAttrs {
    gameId: number;
    teamId: number;
    round: number;
    production_assets: number;
    retail_assets: number;
    production_depreciation: number;
    retail_depreciation: number;
    franchise_cost: number;
    franchise_fee: number;
    retail_entry: number;
    retail_annual_fee: number;
    invest_assets: number;
    invest_retail: number;
    market_research: number;
    invest_promo: number;
    running_promo: number;
    inventories: number;
    inventories_writte_off: number;
}
export declare class Intermediary extends Model<Intermediary, IntermediaryCreationAttrs> {
    id: number;
    gameId: number;
    teamId: number;
    round: number;
    production_assets: number;
    retail_assets: number;
    production_depreciation: number;
    retail_depreciation: number;
    franchise_cost: number;
    franchise_fee: number;
    retail_entry: number;
    retail_annual_fee: number;
    invest_assets: number;
    invest_retail: number;
    retail_writte_off: number;
    operate_retail: number;
    market_research: number;
    invest_promo: number;
    running_promo: number;
    inventories: number;
    inventories_writte_off: number;
    team: Team;
}
export {};
