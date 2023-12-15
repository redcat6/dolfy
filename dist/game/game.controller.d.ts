import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.model';
import { GameService } from './game.service';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    createGame(gameDto: CreateGameDto): Promise<Game>;
    getAllGames(): Promise<Game[]>;
    update(obj: any, id: number): Promise<void>;
    getGameById(id: number): Promise<Game>;
    getUserGames(user_id: number): Promise<Game[]>;
}
