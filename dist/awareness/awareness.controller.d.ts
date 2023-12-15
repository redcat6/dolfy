import { AwarenessService } from './awareness.service';
import { CreateAwarenessDto } from './dto/create-awareness.dto';
import { Awareness } from './awareness.model';
export declare class AwarenessController {
    private awarenessService;
    constructor(awarenessService: AwarenessService);
    create(dto: CreateAwarenessDto): Promise<Awareness>;
    calculateByGameAndRound(game_id: number, round: number): Promise<Awareness[]>;
    awarenessTransition(game_id: number, round: number): Promise<void>;
    getByGameAndRound(game_id: number, round: number): Promise<Awareness[]>;
    removeById(id: number): Promise<number>;
}
