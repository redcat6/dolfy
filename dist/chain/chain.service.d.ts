import { Chain } from './chain.model';
import { CreateChainDto } from './dto/create-chain.dto';
export declare class ChainService {
    private chainRepository;
    constructor(chainRepository: typeof Chain);
    createChain(dto: CreateChainDto): Promise<Chain>;
    getAll(): Promise<Chain[]>;
    getByName(gameId: number, name: string): Promise<Chain>;
    getByGame(gameId: number): Promise<Chain[]>;
    getById(id: number): Promise<Chain>;
    updateChain(id: number, chain: CreateChainDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
