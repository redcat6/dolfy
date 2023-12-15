import { MarketSegment } from './market-segment.model';
import { CreateMarketSegmentDto } from './dto/create-market-segment.dto';
import { ChainService } from 'src/chain/chain.service';
import { ChannelService } from 'src/channel/channel.service';
import { ProductService } from 'src/product/product.service';
import { SpotService } from 'src/spot/spot.service';
export declare class MarketSegmentService {
    private marketSegmentRepository;
    private chainService;
    private channelService;
    private productService;
    private spotService;
    constructor(marketSegmentRepository: typeof MarketSegment, chainService: ChainService, channelService: ChannelService, productService: ProductService, spotService: SpotService);
    createMarketSegment(dto: CreateMarketSegmentDto): Promise<MarketSegment>;
    getAll(): Promise<MarketSegment[]>;
    getByGameRound(gameId: number, round: number): Promise<MarketSegment[]>;
    getById(id: number): Promise<MarketSegment>;
    updateMarketSegment(id: number, market: CreateMarketSegmentDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateActualSize(gameId: number, round: number): Promise<MarketSegment[]>;
    roundTransition(gameId: number, round: number): Promise<void>;
}
