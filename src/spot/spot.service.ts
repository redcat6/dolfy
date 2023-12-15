import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Spot } from './spot.model';
import { CreateSpotDto } from './dto/create-spot.dto';

@Injectable()
export class SpotService {
  constructor(
    @InjectModel(Spot)
    private spotRepository: typeof Spot,
  ) {}

  async createSpot(dto: CreateSpotDto): Promise<Spot> {
    const spot = await this.spotRepository.create(dto);
    return spot;
  }

  async getAllSpots(): Promise<Spot[]> {
    const spots = await this.spotRepository.findAll({
      include: { all: true },
    });
    return spots;
  }

  async getSpotsByGame(gameId: number, round: number): Promise<Spot[]> {
    const spots = await this.spotRepository.findAll({
      where: { gameId, round },
      order: ['teamId'],
      include: { all: true },
    });
    return spots;
  }

  async getSpotByTrademark(
    gameId: number,
    round: number,
    trademarkId: number,
  ): Promise<Spot> {
    const spot = await this.spotRepository.findOne({
      where: { gameId, round, trademarkId },
    });
    return spot;
  }

  async getTeamSpots(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Spot[]> {
    const spots = await this.spotRepository.findAll({
      where: { gameId, round, teamId },
      include: { all: true },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    return spots;
  }

  async getSpotById(id: number): Promise<Spot> {
    const spot = await this.spotRepository.findByPk(id);
    return spot;
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.spotRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async transitionSpot(gameId: number, round: number) {
    const spots = await this.spotRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (spots?.length > 0) {
      spots.forEach(async (item) => {
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          teamId: item.teamId,
          register_round: Number(item.register_round),
          name: item.name,
          core_message: item.core_message,
          advanced_feature: item.advanced_feature,
          price: item.price,
          value: item.value,
          objective: item.objective,
          quality: item.quality,
          trademarkId: item.trademarkId,
          segments: item.segments,
          channels: item.channels,
          investments: 0,
          operations: item.operations,
        };
        try {
          await this.spotRepository.create(dto);
        } catch (error) {
          new HttpException(
            `can't create spot, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
