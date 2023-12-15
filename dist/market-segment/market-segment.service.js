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
exports.MarketSegmentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const market_segment_model_1 = require("./market-segment.model");
const chain_service_1 = require("../chain/chain.service");
const channel_service_1 = require("../channel/channel.service");
const product_service_1 = require("../product/product.service");
const spot_service_1 = require("../spot/spot.service");
const common_functions_1 = require("../functions/common.functions");
let MarketSegmentService = class MarketSegmentService {
    constructor(marketSegmentRepository, chainService, channelService, productService, spotService) {
        this.marketSegmentRepository = marketSegmentRepository;
        this.chainService = chainService;
        this.channelService = channelService;
        this.productService = productService;
        this.spotService = spotService;
    }
    async createMarketSegment(dto) {
        const market = await this.marketSegmentRepository.create(dto);
        return market;
    }
    async getAll() {
        const all = await this.marketSegmentRepository.findAll();
        return all;
    }
    async getByGameRound(gameId, round) {
        const all = await this.marketSegmentRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        return all;
    }
    async getById(id) {
        const segment = await this.marketSegmentRepository.findOne({
            where: { id },
        });
        return segment;
    }
    async updateMarketSegment(id, market) {
        try {
            const num = await this.marketSegmentRepository.update(market, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        const num = await this.marketSegmentRepository.destroy({ where: { id } });
        return num;
    }
    async calculateActualSize(gameId, round) {
        const market = await this.marketSegmentRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        if (!market) {
            throw new common_1.HttpException(`Error: there are no input data about segments`, common_1.HttpStatus.BAD_REQUEST);
        }
        const market_size = market.reduce((sum, item) => {
            return (sum += item.segment.peak_size);
        }, 0);
        const chains = await this.chainService.getByGame(gameId);
        const channels = await this.channelService.getChannelsByGame(gameId, round);
        const chains_coverage = chains === null || chains === void 0 ? void 0 : chains.reduce((sum, item) => {
            return (sum += item.peak_market_coverage * item.stores);
        }, 0);
        const channels_coverage = channels === null || channels === void 0 ? void 0 : channels.reduce((sum, item) => {
            return (sum += item.peak_market_coverage * item.stores);
        }, 0);
        const coverage = chains_coverage + channels_coverage;
        const factor_a = coverage / market_size;
        const products = await this.productService.getProductsByGame(gameId, round);
        const spots = await this.spotService.getSpotsByGame(gameId, round);
        const factor_c = spots.length;
        market.forEach(async (segment) => {
            const models = products.filter((model) => model.available_from == 1 &&
                model.retail_price <= segment.max_price &&
                model.retail_price >= segment.min_price);
            const factor_b = models.length;
            console.log(`количество моделей в сегменте ${segment.segment.name}: `, factor_b);
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
    async roundTransition(gameId, round) {
        const segments = await this.marketSegmentRepository.findAll({
            where: { gameId, round: round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((segments === null || segments === void 0 ? void 0 : segments.length) > 0) {
            segments.forEach(async (segment) => {
                const max_price = (0, common_functions_1.roundNumber)(segment.max_price * 0.92);
                const round_new = 1 + Number(round);
                const brand_high = (0, common_functions_1.roundNumber)(segment.brand_high * 1.05, 2);
                const brand_somehow = (0, common_functions_1.roundNumber)(segment.brand_somehow * 1.08, 2);
                const brand_not = 1 - (brand_high + brand_somehow) > 0
                    ? (0, common_functions_1.roundNumber)(1 - (brand_high + brand_somehow), 2)
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
                await this.createMarketSegment(dto);
            });
        }
    }
};
MarketSegmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(market_segment_model_1.MarketSegment)),
    __metadata("design:paramtypes", [Object, chain_service_1.ChainService,
        channel_service_1.ChannelService,
        product_service_1.ProductService,
        spot_service_1.SpotService])
], MarketSegmentService);
exports.MarketSegmentService = MarketSegmentService;
//# sourceMappingURL=market-segment.service.js.map