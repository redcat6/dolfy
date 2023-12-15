import { MarketSegmentService } from './market-segment.service';
import { CreateMarketSegmentDto } from './dto/create-market-segment.dto';
import { MarketSegment } from './market-segment.model';
export declare class MarketSegmentController {
    private marketSegmentService;
    constructor(marketSegmentService: MarketSegmentService);
    createSegment(dto: CreateMarketSegmentDto): Promise<MarketSegment>;
    actualSizeCalculating(game_id: number, round: number): Promise<MarketSegment[]>;
    getSegments(): Promise<MarketSegment[]>;
    getByGame(game_id: number, round: number): Promise<void>;
    segmentsTransition(game_id: number, round: number): Promise<MarketSegment[]>;
    updateSegment(segment: CreateMarketSegmentDto, id: number): Promise<[affectedCount: number]>;
    deleteSegment(id: number): Promise<number>;
}
