import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MarketSegment } from './market-segment.model';
import { CreateMarketSegmentDto } from './dto/create-market-segment.dto';
import { ChainService } from 'src/chain/chain.service';
import { ChannelService } from 'src/channel/channel.service';
import { ProductService } from 'src/product/product.service';
import { SpotService } from 'src/spot/spot.service';
import { roundNumber } from 'src/functions/common.functions';

@Injectable()
export class MarketSegmentService {
  constructor(
    @InjectModel(MarketSegment)
    private marketSegmentRepository: typeof MarketSegment,
    private chainService: ChainService,
    private channelService: ChannelService,
    private productService: ProductService,
    private spotService: SpotService,
  ) {}

  async createMarketSegment(
    dto: CreateMarketSegmentDto,
  ): Promise<MarketSegment> {
    const market = await this.marketSegmentRepository.create(dto);
    return market;
  }

  async getAll(): Promise<MarketSegment[]> {
    const all = await this.marketSegmentRepository.findAll();
    return all;
  }

  async getByGameRound(
    gameId: number,
    round: number,
  ): Promise<MarketSegment[]> {
    const all = await this.marketSegmentRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });
    return all;
  }

  async getById(id: number): Promise<MarketSegment> {
    const segment = await this.marketSegmentRepository.findOne({
      where: { id },
    });
    return segment;
  }

  async updateMarketSegment(id: number, market: CreateMarketSegmentDto) {
    try {
      const num = await this.marketSegmentRepository.update(market, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    const num = await this.marketSegmentRepository.destroy({ where: { id } });
    return num;
  }

  async calculateActualSize(
    gameId: number,
    round: number,
  ): Promise<MarketSegment[]> {
    const market = await this.marketSegmentRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });

    if (!market) {
      throw new HttpException(
        `Error: there are no input data about segments`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const market_size = market.reduce((sum, item) => {
      return (sum += item.segment.peak_size);
    }, 0);

    const chains = await this.chainService.getByGame(gameId);
    const channels = await this.channelService.getChannelsByGame(gameId, round);

    const chains_coverage = chains?.reduce((sum, item) => {
      return (sum += item.peak_market_coverage * item.stores);
    }, 0);

    const channels_coverage = channels?.reduce((sum, item) => {
      return (sum += item.peak_market_coverage * item.stores);
    }, 0);

    const coverage = chains_coverage + channels_coverage;

    const factor_a = coverage / market_size; //коэффициент покрытия рынка
    //console.log('коэффициент покрытия рынка', factor_a);

    const products = await this.productService.getProductsByGame(gameId, round);
    const spots = await this.spotService.getSpotsByGame(gameId, round);

    const factor_c = spots.length;
    //console.log('количество рекламных роликов', factor_c);

    market.forEach(async (segment) => {
      const models = products.filter(
        (model) =>
          model.available_from == 1 &&
          model.retail_price <= segment.max_price &&
          model.retail_price >= segment.min_price,
      );
      const factor_b = models.length;
      console.log(
        `количество моделей в сегменте ${segment.segment.name}: `,
        factor_b,
      );

      let factor_d = (factor_a / 2 + factor_b / 12 + factor_c / 9) / 3;
      console.log(`d в сегменте ${segment.segment.name}: `, factor_d);

      if (factor_d > 1) {
        factor_d = 1;
      }

      const actual_size = Math.floor(segment.segment.peak_size * factor_d);
      segment.actual_size = actual_size;
      await segment.save();
    });
    return market;
  }

  async roundTransition(gameId: number, round: number) {
    const segments = await this.marketSegmentRepository.findAll({
      where: { gameId, round: round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (segments?.length > 0) {
      segments.forEach(async (segment) => {
        const max_price = roundNumber(segment.max_price * 0.92);
        const round_new = 1 + Number(round);
        const brand_high = roundNumber(segment.brand_high * 1.05, 2);
        const brand_somehow = roundNumber(segment.brand_somehow * 1.08, 2);
        const brand_not =
          1 - (brand_high + brand_somehow) > 0
            ? roundNumber(1 - (brand_high + brand_somehow), 2)
            : 0;

        const dto = {
          gameId: Number(gameId),
          round: round_new,
          segmentId: segment.segmentId,
          max_price,
          min_price: segment.min_price,
          lowest_price: segment.lowest_price,
          best_quality: segment.best_quality,
          on_line: segment.on_line,
          off_line: segment.off_line,
          family: segment.family,
          attractiveness: segment.attractiveness,
          personality: segment.personality,
          social_status: segment.social_status,
          fun: segment.fun,
          friendship: segment.friendship,
          pets: segment.pets,
          independent: segment.independent,
          brand_high,
          brand_not,
          brand_somehow,
          design_classic: segment.design_classic,
          design_art: segment.design_art,
          design_business: segment.design_business,
          design_casual: segment.design_casual,
          design_innovative: segment.design_innovative,
          design_1: segment.design_1,
          design_2: segment.design_2,
          design_3: segment.design_3,
          design_4: segment.design_4,
          design_5: segment.design_5,
          material_1: segment.material_1,
          material_2: segment.material_2,
          material_3: segment.material_3,
          material_4: segment.material_4,
          material_5: segment.material_5,
          manufacturing_1: segment.manufacturing_1,
          manufacturing_2: segment.manufacturing_2,
          manufacturing_3: segment.manufacturing_3,
          manufacturing_4: segment.manufacturing_4,
          manufacturing_5: segment.manufacturing_5,
        };
        /*console.log(dto);*/
        await this.createMarketSegment(dto);
      });
    }
  }
}
