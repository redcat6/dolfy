import { Intermediary } from './intermediary.model';
import { CreateIntermediaryDto } from './dto/create-intermediary.dto';
import { ChannelService } from 'src/channel/channel.service';
import { ProductService } from 'src/product/product.service';
import { SalesService } from 'src/sales/sales.service';
import { ResourceService } from 'src/resource/resource.service';
import { SpotService } from 'src/spot/spot.service';
export declare class IntermediaryService {
    private intermediaryRepository;
    private channelService;
    private productService;
    private salesService;
    private resourceService;
    private spotService;
    constructor(intermediaryRepository: typeof Intermediary, channelService: ChannelService, productService: ProductService, salesService: SalesService, resourceService: ResourceService, spotService: SpotService);
    createIntermediary(dto: CreateIntermediaryDto): Promise<Intermediary>;
    getAllIntermediary(): Promise<Intermediary[]>;
    getIntermediaryByGame(gameId: number, round: number): Promise<Intermediary[]>;
    getTeamIntermediary(gameId: number, round: number, teamId: number): Promise<Intermediary>;
    getIntermediaryById(id: number): Promise<Intermediary>;
    updateIntermediary(id: number, resource: any): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateIndermediary(gameId: number, round: number): Promise<Intermediary[]>;
    transitionIndermediary(gameId: number, round: number): Promise<void>;
}
