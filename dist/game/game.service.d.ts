import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.model';
export declare class GameService {
    private gameRepository;
    constructor(gameRepository: typeof Game);
    createGame(gameDto: CreateGameDto): Promise<Game>;
    getAllGames(): Promise<Game[]>;
    getAllUserGames(userId: number): Promise<Game[]>;
    getUserGameById(userId: number, id: number): Promise<Game>;
    getGameById(id: number): Promise<Game>;
    updateGame(id: number, obj: any): Promise<void>;
}
