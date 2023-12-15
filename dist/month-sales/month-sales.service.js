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
exports.MonthSalesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const month_sales_model_1 = require("./month-sales.model");
const product_service_1 = require("../product/product.service");
const market_segment_service_1 = require("../market-segment/market-segment.service");
const advanced_features_service_1 = require("../advanced-features/advanced-features.service");
const spot_service_1 = require("../spot/spot.service");
const channel_service_1 = require("../channel/channel.service");
const month_sales_1 = require("../functions/month-sales");
const awareness_service_1 = require("../awareness/awareness.service");
const loyalty_service_1 = require("../loyalty/loyalty.service");
const promotion_service_1 = require("../promotion/promotion.service");
let MonthSalesService = class MonthSalesService {
    constructor(monthSalesRepository, productService, marketSegmentService, channelService, afService, awarenessService, loyaltyService, promotionService, spotService) {
        this.monthSalesRepository = monthSalesRepository;
        this.productService = productService;
        this.marketSegmentService = marketSegmentService;
        this.channelService = channelService;
        this.afService = afService;
        this.awarenessService = awarenessService;
        this.loyaltyService = loyaltyService;
        this.promotionService = promotionService;
        this.spotService = spotService;
    }
    async createMonthSales(dto) {
        const result = await this.monthSalesRepository.create(dto);
        return result;
    }
    async getMonthSalesByGame(gameId, round) {
        const month_sales = await this.monthSalesRepository.findAll({
            where: { gameId, round },
            order: ['month', 'teamId', 'trademarkId', 'segmentId'],
            include: { all: true },
        });
        return month_sales;
    }
    async getTeamMonthSales(gameId, round, teamId) {
        const month_sales = await this.monthSalesRepository.findAll({
            where: { gameId, round, teamId },
            order: ['month', 'trademarkId', 'segmentId'],
            include: { all: true },
        });
        return month_sales;
    }
    async calculateMonthSales(gameId, round) {
        const month_sales = await this.monthSalesRepository.findAll({
            where: { gameId, round },
            order: ['month', 'teamId', 'trademarkId', 'segmentId'],
            include: { all: true },
        });
        if (month_sales.length < 1) {
            const products = await this.productService.getProductsByGame(gameId, round);
            const segments = await this.marketSegmentService.getByGameRound(gameId, round);
            if (!products) {
                throw new common_1.HttpException(`there no products for game ${gameId} & round ${round}`, common_1.HttpStatus.NOT_FOUND);
            }
            const channels = await this.channelService.getChannelsByGame(gameId, round);
            const advanced_features = await this.afService.getByGame(gameId, round);
            const spots = await this.spotService.getSpotsByGame(gameId, round);
            const awareness = await this.awarenessService.getAwarenessByGame(gameId, round);
            const loyalty = await this.loyaltyService.getLoyaltyByGame(gameId, round);
            const promotion = await this.promotionService.getPromotionsByGame(gameId, round);
            const trademarks = (0, month_sales_1.countTrademarkModels)(products);
            const allModels = products.length;
            const ranks_arr = (0, month_sales_1.modelsRank)(segments, advanced_features, products, awareness, promotion, loyalty, spots);
            for (let month = 1; month <= 12; month++) {
                const rank_month = ranks_arr[month - 1];
                for (let i = 0; i < rank_month.length; i++) {
                    const segment = rank_month[i].segment;
                    const models = rank_month[i].models;
                    const sales_max_bi = (0, month_sales_1.qualityMaxSales)(segment, models, 'brand_high');
                    const sales_max_bsi = (0, month_sales_1.qualityMaxSales)(segment, models, 'brand_somehow');
                    const sales_max_bni = (0, month_sales_1.qualityMaxSales)(segment, models, 'brand_not');
                    const sales_low_bi = (0, month_sales_1.priceMaxSales)(segment, models, 'brand_high');
                    const sales_low_bsi = (0, month_sales_1.priceMaxSales)(segment, models, 'brand_somehow');
                    const sales_low_bni = (0, month_sales_1.priceMaxSales)(segment, models, 'brand_not');
                    const sales_bi = sales_max_bi + sales_low_bi;
                    const sales_bsi = sales_max_bsi + sales_low_bsi;
                    const sales_bni = sales_max_bni + sales_low_bni;
                    (0, month_sales_1.reasonableMaxSales)(segment, models, 'brand_high', sales_bi);
                    (0, month_sales_1.reasonableMaxSales)(segment, models, 'brand_somehow', sales_bsi);
                    (0, month_sales_1.reasonableMaxSales)(segment, models, 'brand_not', sales_bni);
                }
                const month_products = (0, month_sales_1.matchedMonthModels)(month, products);
                month_products.forEach((product) => {
                    const trademark_numModels = trademarks.find((item) => item.trademarkId === product.trademarkId);
                    const numOfmonths = product.available_till - product.available_from + 1;
                    let capacity = 0;
                    if (trademark_numModels) {
                        capacity = (0, month_sales_1.monthModelCoverage)(allModels, trademark_numModels.trademarkId, trademark_numModels.models, channels);
                    }
                    let available_sale = 0;
                    let offered_sale = 0;
                    if (month === 1) {
                        available_sale =
                            Math.floor(product.production_plan / numOfmonths) +
                                product.inventories_end;
                    }
                    else {
                        const inventories_prev = (0, month_sales_1.getLastMonthInventories)(ranks_arr[month - 2], product);
                        available_sale =
                            Math.floor(product.production_plan / numOfmonths) +
                                inventories_prev;
                    }
                    offered_sale = Math.min(available_sale, capacity);
                    (0, month_sales_1.salesNormalize)(rank_month, product, offered_sale);
                });
                for (let i = 0; i < rank_month.length; i++) {
                    const segment = rank_month[i].segment;
                    (0, month_sales_1.salesNormalizeSegment)(rank_month, segment);
                }
                month_products.forEach((product) => {
                    const numOfmonths = product.available_till - product.available_from + 1;
                    let available_sale = 0;
                    if (month === 1) {
                        available_sale =
                            Math.floor(product.production_plan / numOfmonths) +
                                product.inventories_end;
                    }
                    else {
                        const inventories_prev = (0, month_sales_1.getLastMonthInventories)(ranks_arr[month - 2], product);
                        available_sale =
                            Math.floor(product.production_plan / numOfmonths) +
                                inventories_prev;
                    }
                    (0, month_sales_1.recalculateInventories)(rank_month, product, available_sale);
                });
            }
            for (let m = 1; m <= ranks_arr.length; m++) {
                const month_arr = ranks_arr[m - 1];
                for (let s = 0; s < month_arr.length; s++) {
                    const segment = month_arr[s].segment;
                    for (let p = 0; p < month_arr[s].models.length; p++) {
                        const product = month_arr[s].models[p].product;
                        const numOfmonths = product.available_till - product.available_from + 1;
                        const trademark_numModels = trademarks.find((item) => item.trademarkId === product.trademarkId);
                        let capacity = 0;
                        if (trademark_numModels) {
                            capacity = (0, month_sales_1.monthModelCoverage)(allModels, trademark_numModels.trademarkId, trademark_numModels.models, channels);
                        }
                        let available_sale = 0;
                        let offered_sale = 0;
                        if (m === 1) {
                            available_sale =
                                Math.floor(product.production_plan / numOfmonths) +
                                    product.inventories_end;
                        }
                        else {
                            const inventories_prev = (0, month_sales_1.getLastMonthInventories)(ranks_arr[m - 2], product);
                            available_sale =
                                Math.floor(product.production_plan / numOfmonths) +
                                    inventories_prev;
                        }
                        offered_sale = Math.min(available_sale, capacity);
                        const sales_normalized = month_arr[s].models[p].sales_normalized
                            ? month_arr[s].models[p].sales_normalized
                            : month_arr[s].models[p].sales;
                        const inventories = available_sale - month_arr[s].models[p].sales_total;
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
                        await this.createMonthSales(dto);
                    }
                }
            }
        }
        return month_sales;
    }
};
MonthSalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(month_sales_model_1.MonthSales)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService,
        market_segment_service_1.MarketSegmentService,
        channel_service_1.ChannelService,
        advanced_features_service_1.AdvancedFeaturesService,
        awareness_service_1.AwarenessService,
        loyalty_service_1.LoyaltyService,
        promotion_service_1.PromotionService,
        spot_service_1.SpotService])
], MonthSalesService);
exports.MonthSalesService = MonthSalesService;
//# sourceMappingURL=month-sales.service.js.map