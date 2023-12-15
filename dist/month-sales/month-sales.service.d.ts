import { MonthSales } from './month-sales.model';
import { ProductService } from 'src/product/product.service';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { AdvancedFeaturesService } from 'src/advanced-features/advanced-features.service';
import { SpotService } from 'src/spot/spot.service';
import { CreateMonthSalesDto } from './dto/create-month-sales.dto';
import { ChannelService } from 'src/channel/channel.service';
import { AwarenessService } from 'src/awareness/awareness.service';
import { LoyaltyService } from 'src/loyalty/loyalty.service';
import { PromotionService } from 'src/promotion/promotion.service';
export declare class MonthSalesService {
    private monthSalesRepository;
    private productService;
    private marketSegmentService;
    private channelService;
    private afService;
    private awarenessService;
    private loyaltyService;
    private promotionService;
    private spotService;
    constructor(monthSalesRepository: typeof MonthSales, productService: ProductService, marketSegmentService: MarketSegmentService, channelService: ChannelService, afService: AdvancedFeaturesService, awarenessService: AwarenessService, loyaltyService: LoyaltyService, promotionService: PromotionService, spotService: SpotService);
    createMonthSales(dto: CreateMonthSalesDto): Promise<MonthSales>;
    getMonthSalesByGame(gameId: number, round: number): Promise<MonthSales[]>;
    getTeamMonthSales(gameId: number, round: number, teamId: number): Promise<MonthSales[]>;
    calculateMonthSales(gameId: number, round: number): Promise<MonthSales[]>;
}
