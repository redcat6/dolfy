"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const finances_model_1 = require("./finances.model");
const product_service_1 = require("../product/product.service");
const sales_service_1 = require("../sales/sales.service");
const promotion_service_1 = require("../promotion/promotion.service");
const resource_service_1 = require("../resource/resource.service");
const intermediary_service_1 = require("../intermediary/intermediary.service");
const common_functions_1 = require("../functions/common.functions");
let FinancesService = class FinancesService {
    constructor(financesRepository, productService, salesService, promotionService, resourceService, intermediaryService) {
        this.financesRepository = financesRepository;
        this.productService = productService;
        this.salesService = salesService;
        this.promotionService = promotionService;
        this.resourceService = resourceService;
        this.intermediaryService = intermediaryService;
    }
    async createFinances(dto) {
        const finances = await this.financesRepository.create(dto);
        return finances;
    }
    async getAllFinances() {
        const financess = await this.financesRepository.findAll({
            include: { all: true },
        });
        return financess;
    }
    async getFinancesByGame(gameId, round) {
        const finances = await this.financesRepository.findAll({
            where: { gameId, round },
            order: ['teamId'],
            include: { all: true },
        });
        return finances;
    }
    async getTeamFinances(gameId, round, teamId) {
        const resources = await this.financesRepository.findAll({
            where: { gameId, round, teamId },
            include: { all: true },
        });
        return resources;
    }
    async getFinancesById(id) {
        const resource = await this.financesRepository.findByPk(id);
        return resource;
    }
    async updateFinances(id, resource) {
        try {
            const num = await this.financesRepository.update(resource, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        try {
            const num = await this.financesRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async calculateFinances(gameId, round) {
        const finances = await this.financesRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        const products = await this.productService.getProductsByGame(gameId, round);
        const sales = await this.salesService.getSalesByGame(gameId, round);
        const promotion = await this.promotionService.getPromotionsByGame(gameId, round);
        const resources = await this.resourceService.getResourcesByGame(gameId, round);
        const intermediary = await this.intermediaryService.getIntermediaryByGame(gameId, round);
        finances.forEach((item) => {
            const team_products = products.filter((prod) => prod.teamId === item.teamId);
            let sales_fin = 0;
            let CoGs = 0;
            let less_promo = 0;
            let rd_expenses = 0;
            if ((team_products === null || team_products === void 0 ? void 0 : team_products.length) > 0) {
                team_products.forEach((product) => {
                    const matched = sales.find((it) => it.productId == product.productId);
                    sales_fin += matched.sales;
                    CoGs += matched.sales_units * product.unit_cost;
                    const trademark_prom = promotion.find((prom) => prom.trademarkId == product.trademarkId);
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
            const team_resource = resources.find((res) => res.teamId == item.teamId);
            const borrowings = team_resource.borrowings;
            const ga_expenses = (team_resource.capacities + team_resource.capacities_increase) * 3;
            const team_indermediary = intermediary.find((int) => int.teamId == item.teamId);
            const fixed_assets = team_indermediary.production_assets + team_indermediary.retail_assets;
            const other_incomes = team_indermediary.franchise_cost + team_indermediary.franchise_fee;
            const ms_expenses = team_indermediary.retail_entry +
                team_indermediary.retail_annual_fee +
                team_indermediary.market_research +
                team_indermediary.invest_promo +
                team_indermediary.running_promo;
            const investments = team_indermediary.invest_assets + team_indermediary.invest_retail;
            const depreciation = team_indermediary.production_depreciation +
                team_indermediary.retail_depreciation;
            const inventories = team_indermediary.inventories;
            const interests = (0, common_functions_1.roundNumber)((item.long_term_debt + borrowings) * 0.08, 2);
            const growth_finances = (0, common_functions_1.roundNumber)(item.retained_profit + borrowings, 2);
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
    async transitionFinances(gameId, round) {
        const finances = await this.financesRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        const intermediary = await this.intermediaryService.getIntermediaryByGame(gameId, round);
        if ((finances === null || finances === void 0 ? void 0 : finances.length) > 0) {
            finances.forEach(async (item) => {
                const matched_inter = intermediary.find((inter) => inter.teamId == item.teamId);
                const fixed_assets = matched_inter.production_assets + matched_inter.retail_assets;
                const accumulated_depreciation = item.accumulated_depreciation + item.depreciation;
                const profit = item.sales +
                    item.other_incomes -
                    item.CoGs -
                    item.ga_expenses -
                    item.ms_expenses -
                    item.rd_expenses -
                    item.depreciation -
                    item.interests;
                const retained_profit = (0, common_functions_1.roundNumber)(profit * 0.88, 2);
                const profit_tax = profit > 0 ? (0, common_functions_1.roundNumber)(profit * 0.12, 2) : 0;
                let cash = item.cash +
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
                let accum_write_off = item.accum_write_off +
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
                try {
                    await this.createFinances(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create intermediary, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
FinancesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(finances_model_1.Finances)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService,
        sales_service_1.SalesService,
        promotion_service_1.PromotionService,
        resource_service_1.ResourceService,
        intermediary_service_1.IntermediaryService])
], FinancesService);
exports.FinancesService = FinancesService;
//# sourceMappingURL=finances.service.js.map