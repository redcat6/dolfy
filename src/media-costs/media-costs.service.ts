import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MediaCosts } from './media-costs.model';
import { CreateMediaCostsDto } from './dto/create-media-costs.dto';

@Injectable()
export class MediaCostsService {
  constructor(
    @InjectModel(MediaCosts)
    private mediaCostsRepository: typeof MediaCosts,
  ) {}
  async createMediaCosts(dto: CreateMediaCostsDto): Promise<MediaCosts> {
    const media_costs = await this.mediaCostsRepository.create(dto);
    return media_costs;
  }

  async getAllMediaCosts(): Promise<MediaCosts[]> {
    const media_costs = await this.mediaCostsRepository.findAll();
    return media_costs;
  }

  async getMediaCostsByGame(
    gameId: number,
    round: number,
  ): Promise<MediaCosts[]> {
    const media_cistss = await this.mediaCostsRepository.findAll({
      where: { gameId, round },
    });
    return media_cistss;
  }

  async getMediaCostsById(id: number): Promise<MediaCosts> {
    const mediaCosts = await this.mediaCostsRepository.findByPk(id);
    return mediaCosts;
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.mediaCostsRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async transitionMediaCosts(gameId: number, round: number) {
    const media_costs = await this.mediaCostsRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (media_costs?.length > 0) {
      media_costs.forEach(async (item) => {
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          smm: item.smm,
          content_ads: item.content_ads,
          bloggers_influencers: item.bloggers_influencers,
          postal: item.postal,
          outdoor_advertising: item.outdoor_advertising,
          autoradio_podcasts: item.autoradio_podcasts,
          tv: item.tv,
        };
        try {
          await this.createMediaCosts(dto);
        } catch (error) {
          new HttpException(
            `can't create media cost, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
