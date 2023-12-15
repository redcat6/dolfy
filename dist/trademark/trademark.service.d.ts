import { Trademark } from './trademark.model';
import { CreateTrademarkDto } from './dto/create-trademark.dto';
export declare class TrademarkService {
    private trademarkRepository;
    constructor(trademarkRepository: typeof Trademark);
    createTrademark(dto: CreateTrademarkDto): Promise<Trademark>;
    getAll(): Promise<Trademark[]>;
    getById(id: number): Promise<Trademark>;
    getByName(name: string): Promise<Trademark>;
    updateTrademark(trademark: CreateTrademarkDto, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
