import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loyalty } from './loyalty.model';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { SpotService } from 'src/spot/spot.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';
import { ProductService } from 'src/product/product.service';
import {
  AFRate,
  PriceRate,
  SpotRate,
  TypeRate,
} from 'src/functions/brands.functions';
import { AdvancedFeaturesService } from 'src/advanced-features/advanced-features.service';
import { roundNumber } from 'src/functions/common.functions';

@Injectable()
export class LoyaltyService {
  constructor(
    @InjectModel(Loyalty)
    private loyaltyRepository: typeof Loyalty,
    private productService: ProductService,
    private marketSegmentService: MarketSegmentService,
    private afService: AdvancedFeaturesService,
    private spotService: SpotService,
  ) {}

  async createLoyalty(dto: CreateLoyaltyDto): Promise<Loyalty> {
    const result = await this.loyaltyRepository.create(dto);
    return result;
  }

  async getAllLoyalty(): Promise<Loyalty[]> {
    const loyalty = await this.loyaltyRepository.findAll({
      include: { all: true },
    });
    return loyalty;
  }

  async getLoyaltyByGame(gameId: number, round: number): Promise<Loyalty[]> {
    const loyalty = await this.loyaltyRepository.findAll({
      where: { gameId, round },
      order: ['segmentId'],
      include: { all: true },
    });
    return loyalty;
  }

  async getLoyaltyById(id: number): Promise<Loyalty> {
    const resource = await this.loyaltyRepository.findByPk(id);
    return resource;
  }

  async updateLoyalty(id: number, loyalty: CreateLoyaltyDto) {
    try {
      const num = await this.loyaltyRepository.update(loyalty, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.loyaltyRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async calculateLoyalty(gameId: number, round: number): Promise<Loyalty[]> {
    const loyalty_prev = await this.loyaltyRepository.findAll({
      where: { gameId, round },
      order: ['segmentId'],
      include: { all: true },
    });

    const segments = await this.marketSegmentService.getByGameRound(
      gameId,
      round,
    );

    const products = await this.productService.getProductsByGame(gameId, round);

    const trademarks = [];

    products.forEach((prod) => {
      const inArr = trademarks.find((tr) => tr == prod.trademarkId);
      if (!inArr) {
        trademarks.push(prod.trademarkId);
      }
    });

    if (!loyalty_prev || !products) {
      throw new HttpException(
        `No loyalty or products for game ${gameId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const advanced_features = await this.afService.getByGame(gameId, round);

    const spots = await this.spotService.getSpotsByGame(gameId, round);

    segments.forEach((segment) => {
      trademarks.forEach((trademark) => {
        const models_tr = products.filter(
          (prod) => prod.trademarkId == trademark,
        );

        const rate_k1 = PriceRate(segment, models_tr);
        const rate_n1 = TypeRate(segment, models_tr);

        const af_segment = advanced_features.find(
          (item) => item.segmentId == segment.segmentId,
        );

        const rate_f1 = AFRate(af_segment, models_tr);
        const ps = (rate_k1 * rate_n1 + rate_f1 * 2) / 2;
        const spot_tr = spots.find((spot) => spot.trademarkId == trademark);

        const ads = spot_tr ? SpotRate(spot_tr, segment) : 0;

        let loyalty = 0;

        if (ps > ads) {
          loyalty = ps - ads / 5;
        } else if (ps > ads) {
          loyalty = ps / 3;
        } else {
          loyalty = ps + ads / 5;
        }

        const loyalty_seg_tr = loyalty_prev.find(
          (item) =>
            item.segmentId == segment.segmentId &&
            item.trademarkId == trademark,
        );

        if (!loyalty_seg_tr) {
          return console.log('What are fack????');
        }

        loyalty = loyalty + loyalty_seg_tr.loyalty_prev * 0.2;
        loyalty = roundNumber(loyalty, 2);

        if (loyalty > 0.9) {
          loyalty = 0.9;
        }
        if (loyalty_seg_tr.trademarkId === 8) {
          console.log('ps: ', ps);
          console.log('ads: ', ads);
          console.log('loyalty: ', loyalty);
        }
        loyalty_seg_tr.loyalty = loyalty;
        loyalty_seg_tr.save();
      });
    });
    return loyalty_prev;
  }

  async transitionLoyalty(gameId: number, round: number) {
    const loyalty = await this.loyaltyRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (loyalty?.length > 0) {
      loyalty.forEach(async (item) => {
        const loyalty_prev = item.loyalty;
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          trademarkId: item.trademarkId,
          segmentId: item.segmentId,
          loyalty: 0,
          loyalty_prev,
        };
        try {
          await this.loyaltyRepository.create(dto);
        } catch (error) {
          new HttpException(
            `can't create loyalty, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
