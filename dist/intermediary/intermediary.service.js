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
exports.IntermediaryService = void 0;
const common_1 = require("@nestjs/common");
const intermediary_model_1 = require("./intermediary.model");
const sequelize_1 = require("@nestjs/sequelize");
const channel_service_1 = require("../channel/channel.service");
const product_service_1 = require("../product/product.service");
const sales_service_1 = require("../sales/sales.service");
const resource_service_1 = require("../resource/resource.service");
const spot_service_1 = require("../spot/spot.service");
const common_functions_1 = require("../functions/common.functions");
let IntermediaryService = class IntermediaryService {
    constructor(intermediaryRepository, channelService, productService, salesService, resourceService, spotService) {
        this.intermediaryRepository = intermediaryRepository;
        this.channelService = channelService;
        this.productService = productService;
        this.salesService = salesService;
        this.resourceService = resourceService;
        this.spotService = spotService;
    }
    async createIntermediary(dto) {
        const intermediary = await this.intermediaryRepository.create(dto);
        return intermediary;
    }
    async getAllIntermediary() {
        const intermediary = await this.intermediaryRepository.findAll({
            include: { all: true },
        });
        return intermediary;
    }
    async getIntermediaryByGame(gameId, round) {
        const intermediary = await this.intermediaryRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        return intermediary;
    }
    async getTeamIntermediary(gameId, round, teamId) {
        const intermediary = await this.intermediaryRepository.findOne({
            where: { gameId, round, teamId },
            include: { all: true },
        });
        return intermediary;
    }
    async getIntermediaryById(id) {
        const intermediary = await this.intermediaryRepository.findByPk(id);
        return intermediary;
    }
    async updateIntermediary(id, resource) {
        try {
            const num = await this.intermediaryRepository.update(resource, {
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
            const num = await this.intermediaryRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async calculateIndermediary(gameId, round) {
        const intermediary = await this.intermediaryRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        const channels = await this.channelService.getChannelsByGame(gameId, round);
        const self_channels = channels.filter((ch) => ch.type == 1 || ch.type == 2 || ch.type == 3);
        const franchises = channels.filter((chan) => chan.type === 4);
        const independents = channels.filter((chan) => chan.type === 7 || chan.type === 8);
        const products = await this.productService.getProductsByGame(gameId, round);
        const sales = await this.salesService.getSalesByGame(gameId, round);
        const resources = await this.resourceService.getResourcesByGame(gameId, round);
        const spots = await this.spotService.getSpotsByGame(gameId, round);
        intermediary.forEach((item) => {
            let franchise_fee = 0;
            let franchise_cost = 0;
            const team_franchises = franchises.filter((fr) => fr.teamId === item.teamId);
            if (team_franchises.length > 0) {
                team_franchises.forEach((franchise) => {
                    if (franchise.round == franchise.register_round &&
                        franchise.stores > 0) {
                        franchise_cost += franchise.franchise_cost;
                    }
                    franchise_fee += franchise.franchise_fee * franchise.stores;
                });
            }
            let retail_entry = 0;
            let retail_annual_fee = 0;
            const team_independents = independents.filter((chan) => chan.teamId === item.teamId);
            if ((team_independents === null || team_independents === void 0 ? void 0 : team_independents.length) > 0) {
                team_independents.forEach((chan) => {
                    if (chan.round == chan.register_round) {
                        retail_entry += chan.entry_fee;
                    }
                    if (chan.stores > 0) {
                        retail_annual_fee += chan.annual_fee;
                    }
                });
            }
            let inventories = 0;
            let inventories_writte_off = 0;
            const team_products = products.filter((prod) => prod.teamId === item.teamId);
            if ((team_products === null || team_products === void 0 ? void 0 : team_products.length) > 0) {
                team_products.forEach((product) => {
                    const matched = sales.find((it) => it.productId == product.productId);
                    if (Number(product.available_till) < 12) {
                        inventories_writte_off +=
                            matched.inventories_end * product.unit_cost;
                    }
                    else {
                        inventories += matched.inventories_end * product.unit_cost;
                    }
                });
            }
            const team_resource = resources.find((res) => res.teamId == item.teamId);
            const invest_assets = team_resource.capacities_increase * 10;
            const market_research = team_resource.research_costs;
            let invest_retail = 0;
            let retail_writte_off = 0;
            let operate_retail = 0;
            const team_self_channels = self_channels.filter((ch) => ch.teamId == item.teamId);
            if ((team_self_channels === null || team_self_channels === void 0 ? void 0 : team_self_channels.length) > 0) {
                team_self_channels.forEach((chan) => {
                    if (chan.investment_costs > 0) {
                        invest_retail += chan.investment_costs;
                    }
                    else {
                        retail_writte_off += chan.investment_costs;
                    }
                    operate_retail += chan.operational_costs;
                });
            }
            let invest_promo = 0;
            let running_promo = 0;
            const team_spots = spots.filter((spot) => spot.teamId == item.teamId);
            if ((team_spots === null || team_spots === void 0 ? void 0 : team_spots.length) > 0) {
                team_spots.forEach((spot) => {
                    var _a;
                    if (spot.round == spot.register_round) {
                        invest_promo += spot.investments;
                    }
                    if (((_a = spot.channels) === null || _a === void 0 ? void 0 : _a.length) > 0) {
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
            item.production_depreciation = (0, common_functions_1.roundNumber)(item.production_assets / 8, 2);
            item.retail_depreciation = (0, common_functions_1.roundNumber)(item.retail_assets / 6, 2);
            item.save();
        });
        return intermediary;
    }
    async transitionIndermediary(gameId, round) {
        const intermediary = await this.intermediaryRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((intermediary === null || intermediary === void 0 ? void 0 : intermediary.length) > 0) {
            intermediary.forEach(async (item) => {
                const production_assets = item.production_assets + item.invest_assets;
                const retail_assets = item.retail_assets + item.invest_retail - item.retail_writte_off;
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
                try {
                    await this.createIntermediary(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create intermediary, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
IntermediaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(intermediary_model_1.Intermediary)),
    __metadata("design:paramtypes", [Object, channel_service_1.ChannelService,
        product_service_1.ProductService,
        sales_service_1.SalesService,
        resource_service_1.ResourceService,
        spot_service_1.SpotService])
], IntermediaryService);
exports.IntermediaryService = IntermediaryService;
//# sourceMappingURL=intermediary.service.js.map