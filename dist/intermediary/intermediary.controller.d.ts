import { IntermediaryService } from './intermediary.service';
import { Intermediary } from './intermediary.model';
import { CreateIntermediaryDto } from './dto/create-intermediary.dto';
export declare class IntermediaryController {
    private intermediaryService;
    constructor(intermediaryService: IntermediaryService);
    create(dto: CreateIntermediaryDto): Promise<Intermediary>;
    getByGameAndRound(game_id: number, round: number): Promise<Intermediary[]>;
    calculateIntermediary(game_id: number, round: number): Promise<Intermediary[]>;
    intermediaryTransition(game_id: number, round: number): Promise<void>;
    getFinancesByTeam(teamId: number, gameId: number, round: number): Promise<Intermediary>;
    update(obj: any, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
