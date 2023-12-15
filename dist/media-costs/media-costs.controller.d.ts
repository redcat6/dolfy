import { MediaCostsService } from './media-costs.service';
import { CreateMediaCostsDto } from './dto/create-media-costs.dto';
import { MediaCosts } from './media-costs.model';
export declare class MediaCostsController {
    private mediaCostsService;
    constructor(mediaCostsService: MediaCostsService);
    create(dto: CreateMediaCostsDto): Promise<MediaCosts>;
    getByGameAndRound(game_id: number, round: number): Promise<MediaCosts[]>;
    transitionNextRond(game_id: number, round: number): Promise<void>;
    removeById(id: number): Promise<number>;
}
