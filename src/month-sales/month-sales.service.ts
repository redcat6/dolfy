import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MonthSales } from './month-sales.model';
import { ProductService } from 'src/product/product.service';
import { MarketSegmentService } from 'src/market-segment/market-segment.service';
import { AdvancedFeaturesService } from 'src/advanced-features/advanced-features.service';
import { SpotService } from 'src/spot/spot.service';
import { CreateMonthSalesDto } from './dto/create-month-sales.dto';
import { ChannelService } from 'src/channel/channel.service';
import {
  countTrademarkModels,
  getLastMonthInventories,
  matchedMonthModels,
  modelsRank,
  monthModelCoverage,
  priceMaxSales,
  qualityMaxSales,
  reasonableMaxSales,
  recalculateInventories,
  salesNormalize,
  salesNormalizeSegment,
} from 'src/functions/month-sales';
import { AwarenessService } from 'src/awareness/awareness.service';
import { LoyaltyService } from 'src/loyalty/loyalty.service';
import { PromotionService } from 'src/promotion/promotion.service';

@Injectable()
export class MonthSalesService {
  constructor(
    @InjectModel(MonthSales)
    private monthSalesRepository: typeof MonthSales,
    private productService: ProductService,
    private marketSegmentService: MarketSegmentService,
    private channelService: ChannelService,
    private afService: AdvancedFeaturesService,
    private awarenessService: AwarenessService,
    private loyaltyService: LoyaltyService,
    private promotionService: PromotionService,
    private spotService: SpotService,
  ) {}

  async createMonthSales(dto: CreateMonthSalesDto): Promise<MonthSales> {
    const result = await this.monthSalesRepository.create(dto);
    return result;
  }

  async getMonthSalesByGame(
    gameId: number,
    round: number,
  ): Promise<MonthSales[]> {
    const month_sales = await this.monthSalesRepository.findAll({
      where: { gameId, round },
      order: ['month', 'teamId', 'trademarkId', 'segmentId'],
      include: { all: true },
    });
    return month_sales;
  }

  async getTeamMonthSales(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<MonthSales[]> {
    const month_sales = await this.monthSalesRepository.findAll({
      where: { gameId, round, teamId },
      order: ['month', 'trademarkId', 'segmentId'],
      include: { all: true },
    });
    return month_sales;
  }

  async calculateMonthSales(
    gameId: number,
    round: number,
  ): Promise<MonthSales[]> {
    const month_sales = await this.monthSalesRepository.findAll({
      where: { gameId, round },
      order: ['month', 'teamId', 'trademarkId', 'segmentId'],
      include: { all: true },
    }); /**/

    if (month_sales.length < 1) {
      const products = await this.productService.getProductsByGame(
        gameId,
        round,
      );
      const segments = await this.marketSegmentService.getByGameRound(
        gameId,
        round,
      );

      if (!products) {
        throw new HttpException(
          `there no products for game ${gameId} & round ${round}`,
          HttpStatus.NOT_FOUND,
        );
      }

      const channels = await this.channelService.getChannelsByGame(
        gameId,
        round,
      );
      const advanced_features = await this.afService.getByGame(gameId, round);
      const spots = await this.spotService.getSpotsByGame(gameId, round);
      const awareness = await this.awarenessService.getAwarenessByGame(
        gameId,
        round,
      );
      const loyalty = await this.loyaltyService.getLoyaltyByGame(gameId, round);
      const promotion = await this.promotionService.getPromotionsByGame(
        gameId,
        round,
      );

      const trademarks = countTrademarkModels(products);
      const allModels = products.length;

      // 1. create model rank matrix by months & segments
      const ranks_arr = modelsRank(
        segments,
        advanced_features,
        products,
        awareness,
        promotion,
        loyalty,
        spots,
      );
      // 2. calculate sales_max by segments
      for (let month = 1; month <= 12; month++) {
        const rank_month = ranks_arr[month - 1];
        for (let i = 0; i < rank_month.length; i++) {
          const segment = rank_month[i].segment;
          const models = rank_month[i].models;
          //max rank for subsegment BI best quality
          const sales_max_bi = qualityMaxSales(segment, models, 'brand_high');
          //max rank for subsegment BSI
          const sales_max_bsi = qualityMaxSales(
            segment,
            models,
            'brand_somehow',
          );
          //max rank for subsegment BNI
          const sales_max_bni = qualityMaxSales(segment, models, 'brand_not');
          //min retail price for subsegment BI
          const sales_low_bi = priceMaxSales(segment, models, 'brand_high');
          //min retail price for subsegment BSI
          const sales_low_bsi = priceMaxSales(segment, models, 'brand_somehow');
          //min retail price for subsegment BNI
          const sales_low_bni = priceMaxSales(segment, models, 'brand_not');
          //reasonable customer
          const sales_bi = sales_max_bi + sales_low_bi;
          const sales_bsi = sales_max_bsi + sales_low_bsi;
          const sales_bni = sales_max_bni + sales_low_bni;
          //reasonable for subsegment BI
          reasonableMaxSales(segment, models, 'brand_high', sales_bi);
          //reasonable for subsegment BSI
          reasonableMaxSales(segment, models, 'brand_somehow', sales_bsi);
          //reasonable for subsegment BNI
          reasonableMaxSales(segment, models, 'brand_not', sales_bni);
        }

        const month_products = matchedMonthModels(month, products);
        month_products.forEach((product) => {
          const trademark_numModels = trademarks.find(
            (item) => item.trademarkId === product.trademarkId,
          );

          const numOfmonths =
            product.available_till - product.available_from + 1;

          let capacity = 0;
          if (trademark_numModels) {
            capacity = monthModelCoverage(
              allModels,
              trademark_numModels.trademarkId,
              trademark_numModels.models,
              channels,
            );
          }

          let available_sale = 0;
          let offered_sale = 0;

          if (month === 1) {
            available_sale =
              Math.floor(product.production_plan / numOfmonths) +
              product.inventories_end;
          } else {
            const inventories_prev = getLastMonthInventories(
              ranks_arr[month - 2],
              product,
            );
            available_sale =
              Math.floor(product.production_plan / numOfmonths) +
              inventories_prev;
          }
          offered_sale = Math.min(available_sale, capacity);

          //3. Normalize sales by models & month
          salesNormalize(rank_month, product, offered_sale);
        }); //end products

        //4. Normalize sales by segment actual size*/
        for (let i = 0; i < rank_month.length; i++) {
          const segment = rank_month[i].segment;
          salesNormalizeSegment(rank_month, segment);
        }
        //5. Recalculating the inventories
        month_products.forEach((product) => {
          const numOfmonths =
            product.available_till - product.available_from + 1;
          let available_sale = 0;

          if (month === 1) {
            available_sale =
              Math.floor(product.production_plan / numOfmonths) +
              product.inventories_end;
          } else {
            const inventories_prev = getLastMonthInventories(
              ranks_arr[month - 2],
              product,
            );
            available_sale =
              Math.floor(product.production_plan / numOfmonths) +
              inventories_prev;
          }
          recalculateInventories(rank_month, product, available_sale);
        });
      }
      //5. create monthSales
      for (let m = 1; m <= ranks_arr.length; m++) {
        const month_arr = ranks_arr[m - 1];
        for (let s = 0; s < month_arr.length; s++) {
          const segment = month_arr[s].segment;
          for (let p = 0; p < month_arr[s].models.length; p++) {
            const product = month_arr[s].models[p].product;
            const numOfmonths =
              product.available_till - product.available_from + 1;
            const trademark_numModels = trademarks.find(
              (item) => item.trademarkId === product.trademarkId,
            );

            let capacity = 0;
            if (trademark_numModels) {
              capacity = monthModelCoverage(
                allModels,
                trademark_numModels.trademarkId,
                trademark_numModels.models,
                channels,
              );
            }

            let available_sale = 0;
            let offered_sale = 0;

            if (m === 1) {
              available_sale =
                Math.floor(product.production_plan / numOfmonths) +
                product.inventories_end;
            } else {
              const inventories_prev = getLastMonthInventories(
                ranks_arr[m - 2],
                product,
              );
              //console.log('inventories_prev: ', inventories_prev);
              available_sale =
                Math.floor(product.production_plan / numOfmonths) +
                inventories_prev;
            }
            offered_sale = Math.min(available_sale, capacity);

            const sales_normalized = month_arr[s].models[p].sales_normalized
              ? month_arr[s].models[p].sales_normalized
              : month_arr[s].models[p].sales;
            const inventories =
              available_sale - month_arr[s].models[p].sales_total;

            const dto = {
              gameId: product.gameId,
              round: product.round,
              teamId: product.teamId,
              trademarkId: product.trademarkId,
              segmentId: segment.segmentId,
              productId: product.productId,
              model: product.model,
              month: m,
              available_sales: available_sale,
              capacity: capacity,
              offered_sale: offered_sale,
              max_demand: month_arr[s].models[p].max_demand,
              rank_bi: month_arr[s].models[p].rank_bi,
              rank_bsi: month_arr[s].models[p].rank_bsi,
              rank_bni: month_arr[s].models[p].rank_bni,
              max_sales_bi: month_arr[s].models[p].sales_max_bi,
              max_sales_bsi: month_arr[s].models[p].sales_max_bsi,
              max_sales_bni: month_arr[s].models[p].sales_max_bni,
              sales: month_arr[s].models[p].sales,
              sales_normalized: sales_normalized,
              inventories: inventories,
            };
            /*console.log(dto);*/
            await this.createMonthSales(dto);
          }
        }
      }
    }
    return month_sales;
  }
}
