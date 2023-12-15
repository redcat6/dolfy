import { FinancesService } from './finances.service';
import { CreateFinancesDto } from './dto/create-finances.dto';
import { Finances } from './finances.model';
export declare class FinancesController {
    private financesService;
    constructor(financesService: FinancesService);
    create(dto: CreateFinancesDto): Promise<Finances>;
    getByGameAndRound(game_id: number, round: number): Promise<Finances[]>;
    calculateByGameAndRound(game_id: number, round: number): Promise<Finances[]>;
    financesTransition(game_id: number, round: number): Promise<void>;
    getFinancesByTeam(teamId: number, gameId: number, round: number): Promise<Finances[]>;
    update(dto: CreateFinancesDto, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
