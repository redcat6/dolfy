import { Loyalty } from './loyalty.model';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { SpotService } from 'src/spot/spot.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';
import { ProductService } from 'src/product/product.service';
import { AdvancedFeaturesService } from 'src/advanced-features/advanced-features.service';
export declare class LoyaltyService {
    private loyaltyRepository;
    private productService;
    private marketSegmentService;
    private afService;
    private spotService;
    constructor(loyaltyRepository: typeof Loyalty, productService: ProductService, marketSegmentService: MarketSegmentService, afService: AdvancedFeaturesService, spotService: SpotService);
    createLoyalty(dto: CreateLoyaltyDto): Promise<Loyalty>;
    getAllLoyalty(): Promise<Loyalty[]>;
    getLoyaltyByGame(gameId: number, round: number): Promise<Loyalty[]>;
    getLoyaltyById(id: number): Promise<Loyalty>;
    updateLoyalty(id: number, loyalty: CreateLoyaltyDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateLoyalty(gameId: number, round: number): Promise<Loyalty[]>;
    transitionLoyalty(gameId: number, round: number): Promise<void>;
}
