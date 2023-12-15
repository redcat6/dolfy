import { SalesService } from './sales.service';
import { Sales } from './sales.model';
import { CreateSalesDto } from './dto/create-sales.dto';
export declare class SalesController {
    private salesService;
    constructor(salesService: SalesService);
    create(sales: CreateSalesDto): Promise<Sales>;
    getByGameAndRound(game_id: number, round: number): Promise<Sales[]>;
    getSalesByTeam(team_id: number, gameId: number, round: number): Promise<Sales[]>;
    update(dto: CreateSalesDto, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateByGameAndRound(game_id: number, round: number): Promise<any>;
}
