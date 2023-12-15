import { Spot } from './spot.model';
import { CreateSpotDto } from './dto/create-spot.dto';
export declare class SpotService {
    private spotRepository;
    constructor(spotRepository: typeof Spot);
    createSpot(dto: CreateSpotDto): Promise<Spot>;
    getAllSpots(): Promise<Spot[]>;
    getSpotsByGame(gameId: number, round: number): Promise<Spot[]>;
    getSpotByTrademark(gameId: number, round: number, trademarkId: number): Promise<Spot>;
    getTeamSpots(gameId: number, round: number, teamId: number): Promise<Spot[]>;
    getSpotById(id: number): Promise<Spot>;
    removeById(id: number): Promise<number>;
    transitionSpot(gameId: number, round: number): Promise<void>;
}
