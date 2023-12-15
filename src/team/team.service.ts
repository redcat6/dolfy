import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team)
    private teamRepository: typeof Team,
  ) {}

  createTeam(teamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create(teamDto);
    return team;
  }

  getAllGamesTeam(gameId: number, limit: number): Promise<Team[]> {
    const teams = this.teamRepository.findAll({
      where: { gameId },
      limit: limit,
      include: { all: true },
    });
    return teams;
  }

  getTeamByName(name: string): Promise<Team> {
    const team = this.teamRepository.findOne({
      where: { name },
    });
    return team;
  }

  getTeamById(id: number): Promise<Team> {
    const team = this.teamRepository.findByPk(id, {
      include: { all: true },
    });
    return team;
  }
}
