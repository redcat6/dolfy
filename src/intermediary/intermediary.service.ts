import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Intermediary } from './intermediary.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIntermediaryDto } from './dto/create-intermediary.dto';
import { ChannelService } from 'src/channel/channel.service';
import { ProductService } from 'src/product/product.service';
import { SalesService } from 'src/sales/sales.service';
import { ResourceService } from 'src/resource/resource.service';
import { SpotService } from 'src/spot/spot.service';
import { roundNumber } from 'src/functions/common.functions';
import { FinancesService } from 'src/finances/finances.service';

@Injectable()
export class IntermediaryService {
  constructor(
    @InjectModel(Intermediary)
    private intermediaryRepository: typeof Intermediary,
    private channelService: ChannelService,
    private productService: ProductService,
    private salesService: SalesService,
    private resourceService: ResourceService,
    private spotService: SpotService,
  ) {}

  async createIntermediary(dto: CreateIntermediaryDto): Promise<Intermediary> {
    const intermediary = await this.intermediaryRepository.create(dto);
    return intermediary;
  }

  async getAllIntermediary(): Promise<Intermediary[]> {
    const intermediary = await this.intermediaryRepository.findAll({
      include: { all: true },
    });
    return intermediary;
  }

  async getIntermediaryByGame(
    gameId: number,
    round: number,
  ): Promise<Intermediary[]> {
    const intermediary = await this.intermediaryRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });
    return intermediary;
  }

  async getTeamIntermediary(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Intermediary> {
    const intermediary = await this.intermediaryRepository.findOne({
      where: { gameId, round, teamId },
      include: { all: true },
    });
    return intermediary;
  }

  async getIntermediaryById(id: number): Promise<Intermediary> {
    const intermediary = await this.intermediaryRepository.findByPk(id);
    return intermediary;
  }

  async updateIntermediary(id: number, resource: any) {
    try {
      const num = await this.intermediaryRepository.update(resource, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.intermediaryRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async calculateIndermediary(
    gameId: number,
    round: number,
  ): Promise<Intermediary[]> {
    const intermediary = await this.intermediaryRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });

    const channels = await this.channelService.getChannelsByGame(gameId, round);
    const self_channels = channels.filter(
      (ch) => ch.type == 1 || ch.type == 2 || ch.type == 3,
    );
    const franchises = channels.filter((chan) => chan.type === 4);
    const independents = channels.filter(
      (chan) => chan.type === 7 || chan.type === 8,
    );

    const products = await this.productService.getProductsByGame(gameId, round);
    const sales = await this.salesService.getSalesByGame(gameId, round);

    const resources = await this.resourceService.getResourcesByGame(
      gameId,
      round,
    );

    const spots = await this.spotService.getSpotsByGame(gameId, round);

    intermediary.forEach((item) => {
      /*   franchise fee & cost   */
      let franchise_fee = 0;
      let franchise_cost = 0;

      const team_franchises = franchises.filter(
        (fr) => fr.teamId === item.teamId,
      );
      if (team_franchises.length > 0) {
        team_franchises.forEach((franchise) => {
          if (
            franchise.round == franchise.register_round &&
            franchise.stores > 0
          ) {
            franchise_cost += franchise.franchise_cost;
          }
          franchise_fee += franchise.franchise_fee * franchise.stores;
        });
      }

      /* registration in the independent chains (entry & annual fee) */
      let retail_entry = 0;
      let retail_annual_fee = 0;

      const team_independents = independents.filter(
        (chan) => chan.teamId === item.teamId,
      );

      if (team_independents?.length > 0) {
        team_independents.forEach((chan) => {
          if (chan.round == chan.register_round) {
            retail_entry += chan.entry_fee;
          }
          if (chan.stores > 0) {
            retail_annual_fee += chan.annual_fee;
          }
        });
      }
      /* inventories & inventories_writte_off */
      let inventories = 0;
      let inventories_writte_off = 0;

      const team_products = products.filter(
        (prod) => prod.teamId === item.teamId,
      );

      if (team_products?.length > 0) {
        team_products.forEach((product) => {
          const matched = sales.find((it) => it.productId == product.productId);
          if (Number(product.available_till) < 12) {
            inventories_writte_off +=
              matched.inventories_end * product.unit_cost;
          } else {
            inventories += matched.inventories_end * product.unit_cost;
          }
        });
      }

      /* invest_assets && market_research */
      const team_resource = resources.find((res) => res.teamId == item.teamId);
      const invest_assets = team_resource.capacities_increase * 10;
      const market_research = team_resource.research_costs;

      /* invest_retail, operate_retail && retail_write_off */
      let invest_retail = 0;
      let retail_writte_off = 0;
      let operate_retail = 0;

      const team_self_channels = self_channels.filter(
        (ch) => ch.teamId == item.teamId,
      );

      if (team_self_channels?.length > 0) {
        team_self_channels.forEach((chan) => {
          if (chan.investment_costs > 0) {
            invest_retail += chan.investment_costs;
          } else {
            retail_writte_off += chan.investment_costs;
          }
          operate_retail += chan.operational_costs;
        });
      }
      /*  invest_promo && running_promo */
      let invest_promo = 0;
      let running_promo = 0;

      const team_spots = spots.filter((spot) => spot.teamId == item.teamId);

      if (team_spots?.length > 0) {
        team_spots.forEach((spot) => {
          if (spot.round == spot.register_round) {
            invest_promo += spot.investments;
          }
          if (spot.channels?.length > 0) {
            running_promo += spot.operations;
          }
        });
      }

      item.franchise_fee = franchise_fee;
      item.franchise_cost = franchise_cost;
      item.retail_entry = retail_entry;
      item.retail_annual_fee = retail_annual_fee;
      item.inventories = inventories;
      item.inventories_writte_off = inventories_writte_off;
      item.invest_assets = invest_assets;
      item.market_research = market_research;
      item.invest_retail = invest_retail;
      item.retail_writte_off = retail_writte_off;
      item.retail_assets = invest_retail;
      item.operate_retail = operate_retail;
      item.invest_promo = invest_promo;
      item.running_promo = running_promo;
      item.production_depreciation = roundNumber(item.production_assets / 8, 2);
      item.retail_depreciation = roundNumber(item.retail_assets / 6, 2);

      item.save();
    });

    return intermediary;
  }

  async transitionIndermediary(gameId: number, round: number) {
    const intermediary = await this.intermediaryRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (intermediary?.length > 0) {
      intermediary.forEach(async (item) => {
        const production_assets = item.production_assets + item.invest_assets;
        const retail_assets =
          item.retail_assets + item.invest_retail - item.retail_writte_off;
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          teamId: item.teamId,
          production_assets,
          retail_assets,
          production_depreciation: 0,
          retail_depreciation: 0,
          franchise_cost: 0,
          franchise_fee: 0,
          retail_entry: 0,
          retail_annual_fee: 0,
          invest_assets: 0,
          invest_retail: 0,
          market_research: 0,
          invest_promo: 0,
          running_promo: 0,
          inventories: 0,
          inventories_writte_off: 0,
        };
        /* console.log(dto); */
        try {
          await this.createIntermediary(dto);
        } catch (error) {
          new HttpException(
            `can't create intermediary, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
