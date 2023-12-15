import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sales } from './sales.model';
import { CreateSalesDto } from './dto/create-sales.dto';
import { MonthSalesService } from 'src/month-sales/month-sales.service';
import { ProductService } from 'src/product/product.service';
import { ChannelService } from 'src/channel/channel.service';
import { roundNumber } from 'src/functions/common.functions';
import { PromotionService } from 'src/promotion/promotion.service';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel(Sales)
    private salesRepository: typeof Sales,
    private monthSalesService: MonthSalesService,
    private productService: ProductService,
    private promotionService: PromotionService,
    private channelService: ChannelService,
  ) {}

  async createSales(dto: CreateSalesDto): Promise<Sales> {
    const sales = await this.salesRepository.create(dto);
    return sales;
  }

  async getAllSales(): Promise<Sales[]> {
    const sales = await this.salesRepository.findAll({
      include: { all: true },
    });
    return sales;
  }

  async getSalesByGame(gameId: number, round: number): Promise<Sales[]> {
    const sales = await this.salesRepository.findAll({
      where: { gameId, round },
      order: ['teamId', 'trademarkId'],
      include: { all: true },
    });
    return sales;
  }

  async getTeamSales(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Sales[]> {
    const sales = await this.salesRepository.findAll({
      where: { gameId, round, teamId },
      order: ['trademarkId'],
      include: { all: true },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    return sales;
  }

  async getSalesById(id: number): Promise<Sales> {
    const sales = await this.salesRepository.findByPk(id);
    return sales;
  }

  async updateSales(id: number, sales: CreateSalesDto) {
    try {
      const num = await this.salesRepository.update(sales, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    const num = await this.salesRepository.destroy({ where: { id } });
    return num;
  }

  async calculateSales(gameId: number, round: number) {
    const monthSales = await this.monthSalesService.getMonthSalesByGame(
      gameId,
      round,
    );

    if (monthSales.length < 1) {
      throw new HttpException(
        `there are no month sales by game ${gameId} round ${round}`,
        HttpStatus.NOT_FOUND,
      );
    }
    const products = await this.productService.getProductsByGame(gameId, round);
    const channels = await this.channelService.getChannelsByGame(gameId, round);
    const promotions = await this.promotionService.getPromotionsByGame(
      gameId,
      round,
    );
    let last_sales = [];

    if (round > 0) {
      last_sales = await this.getSalesByGame(gameId, round - 1);
    }

    products.forEach(async (product) => {
      const matched_prod = monthSales.filter(
        (item) => item.productId === product.productId,
      );
      const sales = matched_prod.reduce((sum, item) => {
        return (sum += item.sales_normalized);
      }, 0);

      const prod_channels = [];
      channels.forEach((chan) => {
        chan.trademarks.forEach((tr) => {
          if (tr.id === product.trademarkId) {
            prod_channels.push(chan);
          }
        });
      });

      const sum_coverage = prod_channels.reduce((sum, item) => {
        return (sum += item.peak_market_coverage * item.stores);
      }, 0);

      const product_channels = [];
      const channels_sales = [];
      const channels_sales_cash = [];
      const channels_promotion = [];
      const channel_names = [];

      prod_channels.map((chan) => {
        const sales_units = roundNumber(
          sales * ((chan.peak_market_coverage * chan.stores) / sum_coverage),
        );
        product_channels.push(chan);
        channels_sales.push(sales_units);
      });

      /*************   promotion   ************/
      const prod_promotion = promotions.find(
        (item) => item.trademarkId === product.trademarkId,
      );
      /*************sales in cash**************/

      for (let i = 0; i < product_channels.length; i++) {
        let promotion = 0;
        if (prod_channels[i].type < 7) {
          if (prod_promotion) {
            const cashback = product.retail_price * prod_promotion.cashback;
            promotion = prod_promotion.gift_cost + cashback;
          }
          channels_sales_cash[i] =
            channels_sales[i] * (product.retail_price - promotion);
        } else {
          channels_sales_cash[i] = channels_sales[i] * product.price;
        }
        channels_promotion[i] = promotion;
        channel_names[i] = product_channels[i].name;
      }
      const sales_cash = channels_sales_cash.reduce((sum, item) => {
        return (sum += item);
      }, 0);
      //inventories_beginning
      let inventories_beginning = 0;
      if (round > 0) {
        const last_prod = last_sales.find(
          (item) => item.productId === product.productId,
        );
        if (last_prod) {
          inventories_beginning = last_prod.inventories_end;
        }
      }

      const inventories_end =
        product.production_plan + inventories_beginning - sales;

      const dto = {
        gameId: gameId,
        round: round,
        teamId: product.teamId,
        trademarkId: product.trademarkId,
        productId: product.productId,
        model: product.model,
        production_plan: product.production_plan,
        sales_units: sales,
        sales: sales_cash,
        inventories_beginning: inventories_beginning,
        inventories_end: inventories_end,
        channels: channel_names,
        channels_sales: channels_sales,
        channels_sales_cash: channels_sales_cash,
        channels_promotion: channels_promotion,
      };
      await this.createSales(dto);
    });
    //save channels sales in units
    this.channelSales(gameId, round);
  }

  private async channelSales(gameId: number, round: number): Promise<void> {
    const sales = await this.salesRepository.findAll({
      where: { gameId, round },
      order: ['trademarkId'],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    const channels = await this.channelService.getChannelsByGame(gameId, round);

    if (channels?.length > 0) {
      channels.forEach((channel) => {
        let channel_sales = 0;
        sales.forEach((item) => {
          for (let i = 0; i < item.channels.length; i++) {
            if (item.channels[i] == channel.name) {
              channel_sales += item.channels_sales[i];
            }
          }
        });
        channel.sales_last = channel_sales;
        channel.save();
      });
    }
  }
}
