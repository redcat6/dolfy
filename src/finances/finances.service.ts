import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Finances } from './finances.model';
import { CreateFinancesDto } from './dto/create-finances.dto';
import { ProductService } from 'src/product/product.service';
import { SalesService } from 'src/sales/sales.service';
import { PromotionService } from 'src/promotion/promotion.service';
import { ResourceService } from 'src/resource/resource.service';
import { IntermediaryService } from 'src/intermediary/intermediary.service';
import { roundNumber } from 'src/functions/common.functions';

@Injectable()
export class FinancesService {
  constructor(
    @InjectModel(Finances)
    private financesRepository: typeof Finances,
    private productService: ProductService,
    private salesService: SalesService,
    private promotionService: PromotionService,
    private resourceService: ResourceService,
    private intermediaryService: IntermediaryService,
  ) {}

  async createFinances(dto: CreateFinancesDto): Promise<Finances> {
    const finances = await this.financesRepository.create(dto);
    return finances;
  }

  async getAllFinances(): Promise<Finances[]> {
    const financess = await this.financesRepository.findAll({
      include: { all: true },
    });
    return financess;
  }

  async getFinancesByGame(gameId: number, round: number): Promise<Finances[]> {
    const finances = await this.financesRepository.findAll({
      where: { gameId, round },
      order: ['teamId'],
      include: { all: true },
    });
    return finances;
  }

  async getTeamFinances(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Finances[]> {
    const resources = await this.financesRepository.findAll({
      where: { gameId, round, teamId },
      include: { all: true },
    });
    return resources;
  }

  async getFinancesById(id: number): Promise<Finances> {
    const resource = await this.financesRepository.findByPk(id);
    return resource;
  }

  async updateFinances(id: number, resource: CreateFinancesDto) {
    try {
      const num = await this.financesRepository.update(resource, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.financesRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async calculateFinances(gameId: number, round: number): Promise<Finances[]> {
    const finances = await this.financesRepository.findAll({
      where: { gameId, round },
      include: { all: true },
    });

    const products = await this.productService.getProductsByGame(gameId, round);
    const sales = await this.salesService.getSalesByGame(gameId, round);
    const promotion = await this.promotionService.getPromotionsByGame(
      gameId,
      round,
    );
    const resources = await this.resourceService.getResourcesByGame(
      gameId,
      round,
    );
    const intermediary = await this.intermediaryService.getIntermediaryByGame(
      gameId,
      round,
    );

    finances.forEach((item) => {
      /*  sales, CoGs, less_promo, rd_expenses */
      const team_products = products.filter(
        (prod) => prod.teamId === item.teamId,
      );

      let sales_fin = 0;
      let CoGs = 0;
      let less_promo = 0;
      let rd_expenses = 0;

      if (team_products?.length > 0) {
        team_products.forEach((product) => {
          const matched = sales.find((it) => it.productId == product.productId);
          sales_fin += matched.sales;
          CoGs += matched.sales_units * product.unit_cost;

          const trademark_prom = promotion.find(
            (prom) => prom.trademarkId == product.trademarkId,
          );

          if (trademark_prom) {
            less_promo +=
              trademark_prom.cashback *
                product.retail_price *
                matched.sales_units +
              trademark_prom.gift_cost * matched.sales_units;
          }
          rd_expenses += product.investments;
        });
      }
      /*  borrowings, ga_expenses   */
      const team_resource = resources.find((res) => res.teamId == item.teamId);
      const borrowings = team_resource.borrowings;
      const ga_expenses =
        (team_resource.capacities + team_resource.capacities_increase) * 3;

      /*  fixed_assets, other_incomes, ms_expenses, investments, depreciation */
      const team_indermediary = intermediary.find(
        (int) => int.teamId == item.teamId,
      );

      const fixed_assets =
        team_indermediary.production_assets + team_indermediary.retail_assets;
      const other_incomes =
        team_indermediary.franchise_cost + team_indermediary.franchise_fee;
      const ms_expenses =
        team_indermediary.retail_entry +
        team_indermediary.retail_annual_fee +
        team_indermediary.market_research +
        team_indermediary.invest_promo +
        team_indermediary.running_promo;
      const investments =
        team_indermediary.invest_assets + team_indermediary.invest_retail;
      const depreciation =
        team_indermediary.production_depreciation +
        team_indermediary.retail_depreciation;
      const inventories = team_indermediary.inventories;

      /*  interests */
      const interests = roundNumber(
        (item.long_term_debt + borrowings) * 0.08,
        2,
      );
      const growth_finances = roundNumber(item.retained_profit + borrowings, 2);

      item.sales = sales_fin;
      item.CoGs = CoGs;
      item.less_promo = less_promo;
      item.rd_expenses = rd_expenses;
      item.borrowings = borrowings;
      item.ga_expenses = ga_expenses;
      item.fixed_assets = fixed_assets;
      item.other_incomes = other_incomes;
      item.ms_expenses = ms_expenses;
      item.investments = investments;
      item.depreciation = depreciation;
      item.accumulated_depreciation += depreciation;
      item.interests = interests;
      item.inventories = inventories;
      item.growth_finances = growth_finances;

      item.save();
    });

    return finances;
  }

  async transitionFinances(gameId: number, round: number) {
    const finances = await this.financesRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    const intermediary = await this.intermediaryService.getIntermediaryByGame(
      gameId,
      round,
    );

    if (finances?.length > 0) {
      finances.forEach(async (item) => {
        const matched_inter = intermediary.find(
          (inter) => inter.teamId == item.teamId,
        );
        const fixed_assets =
          matched_inter.production_assets + matched_inter.retail_assets;
        const accumulated_depreciation =
          item.accumulated_depreciation + item.depreciation;

        const profit =
          item.sales +
          item.other_incomes -
          item.CoGs -
          item.ga_expenses -
          item.ms_expenses -
          item.rd_expenses -
          item.depreciation -
          item.interests;
        const retained_profit = roundNumber(profit * 0.88, 2);
        const profit_tax = profit > 0 ? roundNumber(profit * 0.12, 2) : 0;

        let cash =
          item.cash +
          item.sales +
          item.other_incomes -
          item.CoGs -
          item.ga_expenses -
          item.ms_expenses -
          item.rd_expenses -
          item.interests +
          item.borrowings +
          (item.inventories -
            matched_inter.inventories -
            matched_inter.inventories_writte_off) -
          matched_inter.invest_retail -
          profit_tax;

        if (matched_inter.invest_assets > 0) {
          cash += matched_inter.invest_assets;
        }
        const inventories = matched_inter.inventories;
        const long_term_debt = item.long_term_debt + item.borrowings;

        let accum_write_off =
          item.accum_write_off +
          matched_inter.retail_writte_off +
          matched_inter.inventories_writte_off;

        if (matched_inter.invest_assets < 0) {
          accum_write_off += matched_inter.invest_assets;
        }

        const growth_finances = item.borrowings + retained_profit;

        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          teamId: item.teamId,
          fixed_assets,
          accumulated_depreciation,
          cash: cash,
          inventories,
          contributed_capital: item.contributed_capital,
          retained_profit,
          long_term_debt,
          accum_write_off,
          growth_finances,
          sales: 0,
          less_promo: 0,
          other_incomes: 0,
          CoGs: 0,
          ga_expenses: 0,
          ms_expenses: 0,
          rd_expenses: 0,
          depreciation: 0,
          interests: 0,
          investments: 0,
          borrowings: 0,
        };
        /* console.log(dto); */
        try {
          await this.createFinances(dto);
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
