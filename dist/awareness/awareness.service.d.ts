import { Awareness } from './awareness.model';
import { CreateAwarenessDto } from './dto/create-awareness.dto';
import { ChannelService } from 'src/channel/channel.service';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { SpotService } from 'src/spot/spot.service';
export declare class AwarenessService {
    private awarenessRepository;
    private channelService;
    private marketSegmentService;
    private spotService;
    constructor(awarenessRepository: typeof Awareness, channelService: ChannelService, marketSegmentService: MarketSegmentService, spotService: SpotService);
    createAwareness(dto: CreateAwarenessDto): Promise<Awareness>;
    getAllAwareness(): Promise<Awareness[]>;
    getAwarenessByGame(gameId: number, round: number): Promise<Awareness[]>;
    getAwarenessById(id: number): Promise<Awareness>;
    updateAwareness(id: number, awareness: CreateAwarenessDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateAwareness(gameId: number, round: number): Promise<Awareness[]>;
    transitionAwareness(gameId: number, round: number): Promise<void>;
}
