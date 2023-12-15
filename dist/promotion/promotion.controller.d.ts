import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './promotion.model';
export declare class PromotionController {
    private promotionService;
    constructor(promotionService: PromotionService);
    create(promotionDto: CreatePromotionDto): Promise<Promotion>;
    getByGameAndRound(game_id: number, round: number): Promise<Promotion[]>;
    getPromotionsByTeam(team_id: number, gameId: number, round: number): Promise<Promotion[]>;
    removeById(id: number): Promise<number>;
}
