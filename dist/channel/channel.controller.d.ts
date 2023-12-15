import { ChannelService } from './channel.service';
import { Channel } from './channel.model';
import { CreateChannelDto } from './dto/create-channel.dto';
import { addTrademarkDto } from './dto/add-trademark.dto';
export declare class ChannelController {
    private channelService;
    constructor(channelService: ChannelService);
    create(dto: CreateChannelDto): Promise<Channel>;
    updateTrademarks(dto: addTrademarkDto): Promise<Channel>;
    deleteTrademark(channelId: number, trademark: string): Promise<Channel>;
    getChannelById(id: number): Promise<Channel>;
    getNeedsByGame(game_id: number, round: number): Promise<Channel[]>;
    getIndependentByGame(game_id: number, round: number): Promise<Channel[]>;
    getFrinchiseByGame(game_id: number, round: number): Promise<Channel[]>;
    channelTransition(game_id: number, round: number): Promise<void>;
    getChannelsByTeam(team_id: number, gameId: number, round: number): Promise<Channel[]>;
    update(dto: any, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
