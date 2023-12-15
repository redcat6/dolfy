import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AdvancedFeature } from './advanced-features.model';
import { CreateAFDto } from './dto/create-features.dto';
import { ProductService } from 'src/product/product.service';
import { advanced_feature } from 'src/enums';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { SpotService } from 'src/spot/spot.service';
import { ChannelService } from 'src/channel/channel.service';
import { Product } from 'src/product/product.model';

import { totalMarket } from '../functions/segment.functions';
import { Channel } from 'src/channel/channel.model';

import { roundNumber, enumToArrayNames } from 'src/functions/common.functions';

const common_channels = ['TV', 'visual outdoor ads', 'auto radio podcasts'];
const target_channels = [
  'postal mailings',
  'SMM',
  'content marketing',
  'influencers',
];

@Injectable()
export class AdvancedFeaturesService {
  constructor(
    @InjectModel(AdvancedFeature)
    private afRepository: typeof AdvancedFeature,
    private productService: ProductService,
    private marketService: MarketSegmentService,
    private spotService: SpotService,
    private channelService: ChannelService,
  ) {}

  async createAF(dto: CreateAFDto): Promise<AdvancedFeature> {
    const af = await this.afRepository.create(dto);
    return af;
  }

  async getAll(): Promise<AdvancedFeature[]> {
    const all = await this.afRepository.findAll();
    return all;
  }

  async getByGame(gameId: number, round: number): Promise<AdvancedFeature[]> {
    const afs = await this.afRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });
    return afs;
  }

  async getById(id: number): Promise<AdvancedFeature> {
    const af = await this.afRepository.findOne({
      where: { id },
    });
    return af;
  }

  async updateAF(id: number, af: CreateAFDto) {
    try {
      const num = await this.afRepository.update(af, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    const num = await this.afRepository.destroy({ where: { id } });
    return num;
  }

  async calculateAcceptance(
    gameId: number,
    round: number,
  ): Promise<AdvancedFeature[]> {
    const afs = await this.afRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });

    const segments = await this.marketService.getByGameRound(gameId, round);
    const market_peak_coverage = totalMarket(segments);

    const products = await this.productService.getProductsByGame(gameId, round);
    const products_af = products?.filter(
      (prod) => prod.advanced_feature !== '',
    );

    if (products_af.length > 0) {
      const afs_arr = enumToArrayNames(advanced_feature); //enum => array
      //delete first value of array ('')
      afs_arr.shift();

      segments.forEach((segment) => {
        afs_arr.forEach(async (af) => {
          const models = products_af.filter(
            (model) => model.advanced_feature == af,
          );
          //1. exist models with this advanced feature
          if (models?.length > 0) {
            const k1 = models.filter(
              (mod) =>
                mod.retail_price <= segment.max_price &&
                mod.retail_price >= segment.min_price,
            ).length;

            const k2 = models.length - k1;

            let factor_k = (k1 + k2 * 0.4) / 3;

            if (factor_k > 1) {
              factor_k = 1;
            }

            let factor_r = 0; //2. рекламное воздействие ролика (роликов) c данной AF на данный сегмент

            const spots = await this.spotService.getSpotsByGame(gameId, round);
            const spots_af = spots.filter((sp) => sp.advanced_feature === af);

            if (spots_af?.length > 0) {
              spots_af.map((spot) => {
                let spot_r = 0;
                const val = segment[spot.value];
                let commons = 0;

                spot.channels.forEach((chan) => {
                  if (common_channels.includes(chan)) {
                    commons += 1;
                  }
                });
                //console.log('commons: ', commons);
                let targets = 0;

                spot.channels.forEach((chan) => {
                  if (target_channels.includes(chan)) {
                    targets += 1;
                  }
                });
                //console.log('targets: ', targets);
                spot_r = (val * (commons / 2 + targets / 2) * spot.quality) / 5;

                if (spot_r > 1) {
                  spot_r = 1;
                }
                //correction
                spot_r *= this.spotCorrection(spot);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                factor_r += spot_r;
              });
            }
            //3. Выбираем все id TM у которых есть модели с нужной нам AF
            //all game channels
            const channels = await this.channelService.getChannelsByGame(
              gameId,
              round,
            );
            const coverage_af = this.getCoverage(models, channels);
            let factor_m = 0;
            coverage_af > market_peak_coverage
              ? (factor_m = 1)
              : (factor_m = coverage_af / market_peak_coverage);

            //find need with the af & segment
            const af_seg = afs.find(
              (item) => item.segmentId == segment.segment.id,
            );
            const need_af_seg = af_seg[this.getNeed(af)]
              ? af_seg[this.getNeed(af)]
              : 0;

            let sum_factors = factor_k + factor_r + factor_m;
            if (sum_factors > 1) {
              sum_factors = 1;
            }
            let acceptance_af_seg = need_af_seg * sum_factors;
            const prev_acceptance = af_seg[this.getAcceptance(af)]
              ? af_seg[this.getAcceptance(af)]
              : 0;

            if (prev_acceptance > 0) {
              if (acceptance_af_seg > prev_acceptance) {
                acceptance_af_seg += prev_acceptance / 4;
              } else {
                const accept = acceptance_af_seg;
                acceptance_af_seg = prev_acceptance + accept / 4;
              }
            }
            if (acceptance_af_seg > 1) {
              acceptance_af_seg = 1;
            }
            af_seg[this.getAcceptance(af)] = roundNumber(acceptance_af_seg, 2);
            await af_seg.save();
          }
        }); // end af
      });
    }
    return afs;
  }

  private getNeed(feature: string): string {
    if (feature == '' || !feature) {
      return '';
    }
    let need = feature.replace(/\s+/g, '_') + '_need';
    if (feature == 'positioning tracker') {
      need = 'positioning_need';
    } else if (feature == 'against loss insurance') {
      need = 'loss_insurance_need';
    } else if (feature == 'environment friendly utilization') {
      need = 'friendly_utilization_need';
    } else if (feature == 'charity profit sharing') {
      need = 'profit_sharing_need';
    }
    return need;
  }

  private getAcceptance(feature: string): string {
    let acceptance = feature.replace(/\s+/g, '_') + '_acceptance';
    if (feature == 'positioning tracker') {
      acceptance = 'positioning_acceptance';
    } else if (feature == 'against loss insurance') {
      acceptance = 'loss_insurance_acceptance';
    } else if (feature == 'environment friendly utilization') {
      acceptance = 'friendly_utilization_acceptance';
    } else if (feature == 'charity profit sharing') {
      acceptance = 'profit_sharing_acceptance';
    }
    return acceptance;
  }

  private spotCorrection(spot: any): number {
    let rate = 1;
    if (spot.objective == 'stimulate purchase') {
      rate = 0.8;
    } else if (spot.objective == 'introduce brand') {
      rate = 0.7;
    } else if (spot.objective == 'maintain loyalty') {
      rate = 0.6;
    }
    return rate;
  }

  private getCoverage(models: Product[], channels: Channel[]): number {
    const trademarks = [];
    models.map(function (model) {
      const inArr = trademarks.find((tr) => tr == model.trademarkId);
      if (!inArr) {
        trademarks.push(model.trademarkId);
      }
    });
    const channels_tr = []; //channels by trademarks

    trademarks.forEach(function (tr) {
      channels.map((channel) => {
        const matched = channel.trademarks.filter((trad) => trad.id == tr);

        if (matched.length > 0) {
          channels_tr.push(channel);
        }
      });
    });
    const coverage = channels_tr.reduce((sum, chan) => {
      return (sum += chan.peak_market_coverage * chan.stores);
    }, 0);
    //console.log(`coverage: `, coverage);
    return coverage;
  }

  async transitionNeeds(gameId: number, round: number) {
    const needs = await this.afRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (needs?.length > 0) {
      needs.forEach(async (item) => {
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          segmentId: item.segmentId,
          positioning_need: roundNumber(item.positioning_need * 1.03, 2),
          power_bank_need: roundNumber(item.power_bank_need * 1.03, 2),
          missed_items_warning_need: roundNumber(
            item.missed_items_warning_need * 1.03,
            2,
          ),
          danger_alarm_need: roundNumber(item.danger_alarm_need * 1.03, 2),
          fridge_camera_need: roundNumber(item.fridge_camera_need * 1.03, 2),
          loss_insurance_need: roundNumber(item.loss_insurance_need * 1.03, 2),
          friendly_utilization_need: roundNumber(
            item.friendly_utilization_need * 1.03,
            2,
          ),
          profit_sharing_need: roundNumber(item.profit_sharing_need * 1.03, 2),
          individual_pictures_need: roundNumber(
            item.individual_pictures_need * 1.03,
            2,
          ),
        };

        await this.createAF(dto);
      });
    }
  }
}
