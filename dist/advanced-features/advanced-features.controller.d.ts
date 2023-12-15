import { AdvancedFeature } from './advanced-features.model';
import { CreateAFDto } from './dto/create-features.dto';
import { AdvancedFeaturesService } from './advanced-features.service';
export declare class AdvancedFeaturesController {
    private readonly advancedFeatureService;
    constructor(advancedFeatureService: AdvancedFeaturesService);
    createAF(dto: CreateAFDto): Promise<AdvancedFeature>;
    getAllAF(): Promise<AdvancedFeature[]>;
    calculateAcceptance(game_id: number, round: number): Promise<AdvancedFeature[]>;
    goNextNeeds(game_id: number, round: number): Promise<void>;
    getByGame(game_id: number, round: number): Promise<AdvancedFeature[]>;
    updateSegment(af: CreateAFDto, id: number): Promise<[affectedCount: number]>;
    deleteSegment(id: number): Promise<number>;
}
