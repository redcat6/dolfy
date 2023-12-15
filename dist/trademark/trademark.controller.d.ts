import { TrademarkService } from './trademark.service';
import { CreateTrademarkDto } from './dto/create-trademark.dto';
import { Trademark } from './trademark.model';
export declare class TrademarkController {
    private trademarkService;
    constructor(trademarkService: TrademarkService);
    createTrademark(dto: CreateTrademarkDto): Promise<Trademark>;
    getSegments(): Promise<Trademark[]>;
    updateSegment(trademark: CreateTrademarkDto, id: number): Promise<[affectedCount: number]>;
    deleteSegment(id: number): Promise<number>;
}
