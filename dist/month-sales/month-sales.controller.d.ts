import { MonthSalesService } from './month-sales.service';
import { CreateMonthSalesDto } from './dto/create-month-sales.dto';
import { MonthSales } from './month-sales.model';
export declare class MonthSalesController {
    private monthSalesService;
    constructor(monthSalesService: MonthSalesService);
    create(dto: CreateMonthSalesDto): Promise<MonthSales>;
    getByGameAndRound(game_id: number, round: number): Promise<MonthSales[]>;
    getSalesByTeam(team_id: number, gameId: number, round: number): Promise<MonthSales[]>;
    calculateByGameAndRound(game_id: number, round: number): Promise<MonthSales[]>;
}
