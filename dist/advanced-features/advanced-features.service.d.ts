import { AdvancedFeature } from './advanced-features.model';
import { CreateAFDto } from './dto/create-features.dto';
import { ProductService } from 'src/product/product.service';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { SpotService } from 'src/spot/spot.service';
import { ChannelService } from 'src/channel/channel.service';
export declare class AdvancedFeaturesService {
    private afRepository;
    private productService;
    private marketService;
    private spotService;
    private channelService;
    constructor(afRepository: typeof AdvancedFeature, productService: ProductService, marketService: MarketSegmentService, spotService: SpotService, channelService: ChannelService);
    createAF(dto: CreateAFDto): Promise<AdvancedFeature>;
    getAll(): Promise<AdvancedFeature[]>;
    getByGame(gameId: number, round: number): Promise<AdvancedFeature[]>;
    getById(id: number): Promise<AdvancedFeature>;
    updateAF(id: number, af: CreateAFDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateAcceptance(gameId: number, round: number): Promise<AdvancedFeature[]>;
    private getNeed;
    private getAcceptance;
    private spotCorrection;
    private getCoverage;
    transitionNeeds(gameId: number, round: number): Promise<void>;
}
