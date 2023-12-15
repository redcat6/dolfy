import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { Chain } from './chain.model';
export declare class ChainController {
    private chainService;
    constructor(chainService: ChainService);
    createChain(dto: CreateChainDto): Promise<Chain>;
    getChainsByGame(game_id: number): Promise<Chain[]>;
    updateChain(chain: CreateChainDto, id: number): Promise<[affectedCount: number]>;
    deleteSegment(id: number): Promise<number>;
}
