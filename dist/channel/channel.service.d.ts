import { Channel } from './channel.model';
import { CreateChannelDto } from './dto/create-channel.dto';
import { TrademarkService } from 'src/trademark/trademark.service';
import { addTrademarkDto } from './dto/add-trademark.dto';
import { ProductService } from 'src/product/product.service';
import { ChainService } from 'src/chain/chain.service';
export declare class ChannelService {
    private channelRepository;
    private trademarkService;
    private productsService;
    private chainService;
    constructor(channelRepository: typeof Channel, trademarkService: TrademarkService, productsService: ProductService, chainService: ChainService);
    createChannel(dto: CreateChannelDto): Promise<Channel>;
    getChannelsByGame(gameId: number, round: number): Promise<Channel[]>;
    getTeamChannels(gameId: number, round: number, teamId: number): Promise<Channel[]>;
    getChannelById(id: number): Promise<Channel>;
    updateChannel(id: number, channel: any): Promise<[affectedCount: number]>;
    removeChannelById(id: number): Promise<number>;
    addTrademark(dto: addTrademarkDto): Promise<Channel>;
    removeTrademark(channelId: number, brand: string): Promise<Channel>;
    getCoverage(type: number): number;
    calculateIndependentChains(gameId: number, round: number): Promise<Channel[]>;
    calculateFranchiseStores(gameId: number, round: number): Promise<Channel[]>;
    transitionChannel(gameId: number, round: number): Promise<void>;
}
