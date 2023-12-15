import { MediaCosts } from './media-costs.model';
import { CreateMediaCostsDto } from './dto/create-media-costs.dto';
export declare class MediaCostsService {
    private mediaCostsRepository;
    constructor(mediaCostsRepository: typeof MediaCosts);
    createMediaCosts(dto: CreateMediaCostsDto): Promise<MediaCosts>;
    getAllMediaCosts(): Promise<MediaCosts[]>;
    getMediaCostsByGame(gameId: number, round: number): Promise<MediaCosts[]>;
    getMediaCostsById(id: number): Promise<MediaCosts>;
    removeById(id: number): Promise<number>;
    transitionMediaCosts(gameId: number, round: number): Promise<void>;
}
