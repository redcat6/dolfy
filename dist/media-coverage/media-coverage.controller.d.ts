import { MediaCoverageService } from './media-coverage.service';
import { MediaCoverage } from './media-coverage.model';
import { CreateMediaCoverageDto } from './dto/create-media-coverage.dto';
export declare class MediaCoverageController {
    private mediaCoverageService;
    constructor(mediaCoverageService: MediaCoverageService);
    create(dto: CreateMediaCoverageDto): Promise<MediaCoverage>;
    getCoverageByGameAndRound(game_id: number, round: number): Promise<MediaCoverage[]>;
    transitionMediaCoverage(game_id: number, round: number): Promise<void>;
    removeById(id: number): Promise<number>;
}
