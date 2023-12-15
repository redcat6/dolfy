import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Channel } from './channel.model';
import { CreateChannelDto } from './dto/create-channel.dto';
import { TrademarkService } from 'src/trademark/trademark.service';
import { EditChannelDto } from './dto/edit-channel.dto';
import { addTrademarkDto } from './dto/add-trademark.dto';
import { ProductService } from 'src/product/product.service';
import { ChainService } from 'src/chain/chain.service';
import {
  MatchByDesign,
  MatchByMargin,
  MatchByPrice,
} from 'src/functions/brands.functions';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(Channel)
    private channelRepository: typeof Channel,
    private trademarkService: TrademarkService,
    private productsService: ProductService,
    private chainService: ChainService,
  ) {}

  async createChannel(dto: CreateChannelDto): Promise<Channel> {
    const trs = [];

    dto.trademarks.forEach(async (tr) => {
      const res = await this.trademarkService.getByName(tr);
      if (res) {
        trs.push(res);
      }
    });
    const peak_market_coverage = this.getCoverage(dto.type);

    const forChan = { ...dto, peak_market_coverage: peak_market_coverage };

    const channel = await this.channelRepository.create(forChan);
    await channel.$set('trademarks', trs);
    return channel;
  }

  async getChannelsByGame(gameId: number, round: number): Promise<Channel[]> {
    const channels = await this.channelRepository.findAll({
      where: { gameId, round },
      order: ['teamId'],
      include: { all: true },
    });

    return channels;
  }

  async getTeamChannels(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Channel[]> {
    const channels = await this.channelRepository.findAll({
      where: { gameId, round, teamId },
      include: { all: true },
    });
    return channels;
  }

  async getChannelById(id: number): Promise<Channel> {
    const res = await this.channelRepository.findByPk(id, {
      include: { all: true },
    });
    return res;
  }

  async updateChannel(id: number, channel: any) {
    try {
      const num = await this.channelRepository.update(channel, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeChannelById(id: number): Promise<number> {
    try {
      const num = await this.channelRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addTrademark(dto: addTrademarkDto): Promise<Channel> {
    const channel = await this.channelRepository.findByPk(dto.channelId);
    const trademark = await this.trademarkService.getByName(dto.trademark);

    if (channel && trademark) {
      await channel.$add('trademarks', trademark);
    } else {
      throw new HttpException(
        `the channel with id: ${dto.channelId} or trademark ${dto.trademark}
         not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return channel;
  }

  async removeTrademark(channelId: number, brand: string): Promise<Channel> {
    const brand_decoded = decodeURIComponent(brand);
    const channel = await this.channelRepository.findByPk(channelId);
    const trademark = await this.trademarkService.getByName(brand_decoded);

    if (channel && trademark) {
      await channel.$remove('trademarks', trademark);
    } else {
      throw new HttpException(
        `the channel with id: ${channelId} or trademark ${brand}
         not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return channel;
  }

  getCoverage(type: number): number {
    let coverage = 0;
    switch (type) {
      case 1:
        coverage = 60000;
        break;
      case 2:
        coverage = 20000;
        break;
      case 3:
        coverage = 20000;
        break;
      case 4:
        coverage = 20000;
        break;
      case 5:
        coverage = 20000;
        break;
      case 7:
        coverage = 120000;
        break;
      case 8:
        coverage = 40000;
        break;
    }
    return coverage;
  }

  async calculateIndependentChains(
    gameId: number,
    round: number,
  ): Promise<Channel[]> {
    const channels = await this.getChannelsByGame(gameId, round);
    const independents = channels.filter((chan) => chan.type === 8);

    if (independents?.length < 1) {
      return;
    }
    const products = await this.productsService.getProductsByGame(
      gameId,
      round,
    );

    independents.forEach((item) => {
      item.trademarks.forEach(async (trademark) => {
        const chain = await this.chainService.getByName(gameId, trademark.name);
        const productsOfTrademark = products.filter(
          (prod) => prod.trademarkId === trademark.id,
        );

        if (productsOfTrademark.length > 0) {
          const all_models = productsOfTrademark.length;
          const num_price = MatchByPrice(chain, productsOfTrademark);
          const num_design = MatchByDesign(chain, productsOfTrademark);
          const num_margin = MatchByMargin(chain, productsOfTrademark);
          const rate_price = num_price / all_models; //0.6
          const rate_design = num_design / all_models; //0.6
          const rate_margin = num_margin / all_models; // 0.6

          if (rate_price < 0.6 || rate_design < 0.6 || rate_margin < 0.6) {
            // delete trademark
            console.log(`deleting the trademark ${trademark.name}`);
            this.removeTrademark(item.id, trademark.name);
          }
        }
      });
      if (item.trademarks?.length < 1) {
        item.stores = 0;
      }
    });
    return independents;
  }

  async calculateFranchiseStores(gameId: number, round: number) {
    const channels = await this.getChannelsByGame(gameId, round);
    const franchises = channels.filter((chan) => chan.type === 4);

    if (franchises?.length < 1) {
      return;
    }

    const self_channels = channels.filter((channel) => channel.type < 4);

    franchises.forEach((franchise) => {
      const matched_channels = [];
      self_channels.forEach((channel) => {
        channel.trademarks.forEach((trademark) => {
          if (trademark.id === franchise.trademarks[0].id) {
            const inArr = matched_channels.find(
              (chan) => chan.id == channel.id,
            );
            if (!inArr) {
              matched_channels.push(channel);
            }
          }
        });
      });
      const coverage = matched_channels.reduce((sum, item) => {
        return (sum += this.getCoverage(item.type) * item.stores);
      }, 0);
      const stores = Math.floor((coverage * 0.2) / 20000);
      const peak_market_coverage = this.getCoverage(franchise.type);
      franchise.stores = stores;
      franchise.peak_market_coverage = peak_market_coverage;
      franchise.save();
    });

    return channels;
  }

  async transitionChannel(gameId: number, round: number) {
    const channels = await this.channelRepository.findAll({
      where: { gameId, round },
      include: { all: true },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (channels?.length > 0) {
      channels.forEach(async (item) => {
        //отсекаем все каналы, которые не зашли в этом раунде
        if (item.stores > 0) {
          const trademarks = item.trademarks.map((tr) => tr.name);
          const stores = item.type == 4 ? 0 : item.stores;
          const dto = {
            gameId: Number(gameId),
            round: Number(round + 1),
            register_round: item.register_round,
            teamId: item.teamId,
            type: item.type,
            name: item.name,
            stores: stores,
            trademarks: trademarks,
            investment_costs: 0,
            operational_costs: item.operational_costs,
            sales_last: item.sales_last,
            franchise_cost: item.franchise_cost,
            franchise_fee: item.franchise_fee,
          };
          /* console.log(dto); */
          try {
            await this.createChannel(dto);
          } catch (error) {
            new HttpException(
              `can't create channel, error: ${error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      });
    }
  }
}
