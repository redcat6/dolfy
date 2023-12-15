import { SpotService } from './spot.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { Spot } from './spot.model';
export declare class SpotController {
    private spotService;
    constructor(spotService: SpotService);
    create(spotDto: CreateSpotDto): Promise<Spot>;
    getByGameAndRound(game_id: number, round: number): Promise<Spot[]>;
    spotTransition(game_id: number, round: number): Promise<void>;
    getProductsByTeam(team_id: number, gameId: number, round: number): Promise<Spot[]>;
    removeById(id: number): Promise<number>;
}
