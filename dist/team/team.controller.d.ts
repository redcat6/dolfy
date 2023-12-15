import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.model';
import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createGame(teamDto: CreateTeamDto): Promise<Team>;
    getAllGames(game_id: number, limit: number): Promise<Team[]>;
    getTeamById(teamId: number): Promise<Team>;
}
