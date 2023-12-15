import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Promotion } from './promotion.model';
import { CreatePromotionDto } from './dto/create-promotion.dto';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel(Promotion)
    private promotionRepository: typeof Promotion,
  ) {}

  async createPromotion(dto: CreatePromotionDto): Promise<Promotion> {
    const promotion = await this.promotionRepository.create(dto);
    return promotion;
  }

  async getAllPromotions(): Promise<Promotion[]> {
    const products = await this.promotionRepository.findAll({
      include: { all: true },
    });
    return products;
  }

  async getPromotionsByGame(
    gameId: number,
    round: number,
  ): Promise<Promotion[]> {
    const promotions = await this.promotionRepository.findAll({
      where: { gameId, round },
      order: ['teamId'],
      include: { all: true },
    });
    return promotions;
  }

  async getTeamPromotions(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Promotion[]> {
    const promotions = await this.promotionRepository.findAll({
      where: { gameId, round, teamId },
      include: { all: true },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    return promotions;
  }

  async getPromotiontById(id: number): Promise<Promotion> {
    const promotion = await this.promotionRepository.findByPk(id);
    return promotion;
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.promotionRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
