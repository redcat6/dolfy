import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MediaCoverage } from './media-coverage.model';
import { CreateMediaCoverageDto } from './dto/create-media-coverage.dto';

@Injectable()
export class MediaCoverageService {
  constructor(
    @InjectModel(MediaCoverage)
    private mediaCoverageRepository: typeof MediaCoverage,
  ) {}
  async createMediaCoverage(
    dto: CreateMediaCoverageDto,
  ): Promise<MediaCoverage> {
    const media_coverage = await this.mediaCoverageRepository.create(dto);
    return media_coverage;
  }

  async getAllMediaCoverage(): Promise<MediaCoverage[]> {
    const media_coverage = await this.mediaCoverageRepository.findAll();
    return media_coverage;
  }

  async getMediaCoverageByGame(
    gameId: number,
    round: number,
  ): Promise<MediaCoverage[]> {
    const media_coverage = await this.mediaCoverageRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });
    return media_coverage;
  }

  async getMediaCoverageById(id: number): Promise<MediaCoverage> {
    const mediaCoverage = await this.mediaCoverageRepository.findByPk(id);
    return mediaCoverage;
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.mediaCoverageRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async transitionMediaCoverage(gameId: number, round: number) {
    const media_covs = await this.mediaCoverageRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (media_covs?.length > 0) {
      media_covs.forEach(async (item) => {
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
          segmentId: item.segmentId,
        };
        try {
          await this.createMediaCoverage(dto);
        } catch (error) {
          new HttpException(
            `can't create media coverage, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
