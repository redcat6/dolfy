import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.model';
export declare class TeamService {
    private teamRepository;
    constructor(teamRepository: typeof Team);
    createTeam(teamDto: CreateTeamDto): Promise<Team>;
    getAllGamesTeam(gameId: number, limit: number): Promise<Team[]>;
    getTeamByName(name: string): Promise<Team>;
    getTeamById(id: number): Promise<Team>;
}
