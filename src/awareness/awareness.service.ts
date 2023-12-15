import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Awareness } from './awareness.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAwarenessDto } from './dto/create-awareness.dto';
import { ChannelService } from 'src/channel/channel.service';
import { BrandCoverage, PromoRate } from 'src/functions/brands.functions';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { totalMarket } from 'src/functions/segment.functions';
import { SpotService } from 'src/spot/spot.service';
import { roundNumber } from 'src/functions/common.functions';
import { Trademark } from 'src/trademark/trademark.model';

@Injectable()
export class AwarenessService {
  constructor(
    @InjectModel(Awareness)
    private awarenessRepository: typeof Awareness,
    private channelService: ChannelService,
    private marketSegmentService: MarketSegmentService,
    private spotService: SpotService,
  ) {}

  async createAwareness(dto: CreateAwarenessDto): Promise<Awareness> {
    const result = await this.awarenessRepository.create(dto);
    return result;
  }

  async getAllAwareness(): Promise<Awareness[]> {
    const awareness = await this.awarenessRepository.findAll({
      include: { all: true },
    });
    return awareness;
  }

  async getAwarenessByGame(
    gameId: number,
    round: number,
  ): Promise<Awareness[]> {
    const awareness = await this.awarenessRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });
    return awareness;
  }

  async getAwarenessById(id: number): Promise<Awareness> {
    const resource = await this.awarenessRepository.findByPk(id);
    return resource;
  }

  async updateAwareness(id: number, awareness: CreateAwarenessDto) {
    try {
      const num = await this.awarenessRepository.update(awareness, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.awarenessRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async calculateAwareness(
    gameId: number,
    round: number,
  ): Promise<Awareness[]> {
    const awareness_prev = await this.awarenessRepository.findAll({
      where: { gameId, round },
      include: [Trademark],
    });

    const channels = await this.channelService.getChannelsByGame(gameId, round);

    if (!awareness_prev || !channels) {
      throw new HttpException(
        `No awareness or retail channels for game ${gameId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const segments = await this.marketSegmentService.getByGameRound(
      gameId,
      round,
    );

    const spots = await this.spotService.getSpotsByGame(gameId, round);

    awareness_prev.forEach((item) => {
      const brand_coverage = BrandCoverage(item.trademarkId, channels);
      const peak_size = totalMarket(segments);
      const retail_market_coverage = brand_coverage / peak_size;
      let promo_rate = 0;

      const spot = spots.find((it) => it.trademarkId === item.trademarkId);

      if (spot) {
        promo_rate = PromoRate(spot);
      }

      const max = Math.max(retail_market_coverage, promo_rate);
      const min = Math.min(retail_market_coverage, promo_rate);
      let awareness = max + min / 5 + item.awareness_prev * 0.2; // accomodation val
      awareness = roundNumber(awareness, 2);

      if (awareness > 0.9) {
        awareness = 0.9;
      }

      item.awareness = awareness;
      item.save();
    });

    return awareness_prev;
  }

  async transitionAwareness(gameId: number, round: number) {
    const awareness = await this.awarenessRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (awareness?.length > 0) {
      awareness.forEach(async (item) => {
        const awareness_prev = item.awareness;
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          trademarkId: item.trademarkId,
          awareness: 0,
          awareness_prev,
        };
        try {
          await this.awarenessRepository.create(dto);
        } catch (error) {
          new HttpException(
            `can't create awareness, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
