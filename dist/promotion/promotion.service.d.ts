import { Promotion } from './promotion.model';
import { CreatePromotionDto } from './dto/create-promotion.dto';
export declare class PromotionService {
    private promotionRepository;
    constructor(promotionRepository: typeof Promotion);
    createPromotion(dto: CreatePromotionDto): Promise<Promotion>;
    getAllPromotions(): Promise<Promotion[]>;
    getPromotionsByGame(gameId: number, round: number): Promise<Promotion[]>;
    getTeamPromotions(gameId: number, round: number, teamId: number): Promise<Promotion[]>;
    getPromotiontById(id: number): Promise<Promotion>;
    removeById(id: number): Promise<number>;
}
