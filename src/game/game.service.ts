import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.model';
import { Team } from 'src/team/team.model';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game) private gameRepository: typeof Game) {}

  async createGame(gameDto: CreateGameDto): Promise<Game> {
    const game = await this.gameRepository.create(gameDto);
    return game;
  }

  async getAllGames(): Promise<Game[]> {
    const games = await this.gameRepository.findAll();
    return games;
  }

  async getAllUserGames(userId: number): Promise<Game[]> {
    const games = await this.gameRepository.findAll({
      where: { userId },
      include: { all: true },
    });
    return games;
  }

  async getUserGameById(userId: number, id: number): Promise<Game> {
    const game = await this.gameRepository.findOne({ where: { userId, id } });
    return game;
  }

  async getGameById(id: number): Promise<Game> {
    const game = await this.gameRepository.findByPk(id, {
      include: [Team],
    });
    return game;
  }

  async updateGame(id: number, obj: any) {
    try {
      await this.gameRepository.update(obj, {
        where: { id },
      });
    } catch (error) {
      throw error.message;
    }
  }
}
