import { MediaCoverage } from './media-coverage.model';
import { CreateMediaCoverageDto } from './dto/create-media-coverage.dto';
export declare class MediaCoverageService {
    private mediaCoverageRepository;
    constructor(mediaCoverageRepository: typeof MediaCoverage);
    createMediaCoverage(dto: CreateMediaCoverageDto): Promise<MediaCoverage>;
    getAllMediaCoverage(): Promise<MediaCoverage[]>;
    getMediaCoverageByGame(gameId: number, round: number): Promise<MediaCoverage[]>;
    getMediaCoverageById(id: number): Promise<MediaCoverage>;
    removeById(id: number): Promise<number>;
    transitionMediaCoverage(gameId: number, round: number): Promise<void>;
}
