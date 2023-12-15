import { LoyaltyService } from './loyalty.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';
import { Loyalty } from './loyalty.model';
export declare class LoyaltyController {
    private loyaltyService;
    constructor(loyaltyService: LoyaltyService);
    create(dto: CreateLoyaltyDto): Promise<Loyalty>;
    calculateByGameAndRound(game_id: number, round: number): Promise<Loyalty[]>;
    loyaltyTransition(game_id: number, round: number): Promise<void>;
    getByGameAndRound(game_id: number, round: number): Promise<Loyalty[]>;
    removeById(id: number): Promise<number>;
}
