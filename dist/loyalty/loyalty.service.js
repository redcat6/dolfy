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
exports.LoyaltyService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const loyalty_model_1 = require("./loyalty.model");
const market_segment_service_1 = require("../market-segment/market-segment.service");
const spot_service_1 = require("../spot/spot.service");
const product_service_1 = require("../product/product.service");
const brands_functions_1 = require("../functions/brands.functions");
const advanced_features_service_1 = require("../advanced-features/advanced-features.service");
const common_functions_1 = require("../functions/common.functions");
let LoyaltyService = class LoyaltyService {
    constructor(loyaltyRepository, productService, marketSegmentService, afService, spotService) {
        this.loyaltyRepository = loyaltyRepository;
        this.productService = productService;
        this.marketSegmentService = marketSegmentService;
        this.afService = afService;
        this.spotService = spotService;
    }
    async createLoyalty(dto) {
        const result = await this.loyaltyRepository.create(dto);
        return result;
    }
    async getAllLoyalty() {
        const loyalty = await this.loyaltyRepository.findAll({
            include: { all: true },
        });
        return loyalty;
    }
    async getLoyaltyByGame(gameId, round) {
        const loyalty = await this.loyaltyRepository.findAll({
            where: { gameId, round },
            order: ['segmentId'],
            include: { all: true },
        });
        return loyalty;
    }
    async getLoyaltyById(id) {
        const resource = await this.loyaltyRepository.findByPk(id);
        return resource;
    }
    async updateLoyalty(id, loyalty) {
        try {
            const num = await this.loyaltyRepository.update(loyalty, {
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
            const num = await this.loyaltyRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async calculateLoyalty(gameId, round) {
        const loyalty_prev = await this.loyaltyRepository.findAll({
            where: { gameId, round },
            order: ['segmentId'],
            include: { all: true },
        });
        const segments = await this.marketSegmentService.getByGameRound(gameId, round);
        const products = await this.productService.getProductsByGame(gameId, round);
        const trademarks = [];
        products.forEach((prod) => {
            const inArr = trademarks.find((tr) => tr == prod.trademarkId);
            if (!inArr) {
                trademarks.push(prod.trademarkId);
            }
        });
        if (!loyalty_prev || !products) {
            throw new common_1.HttpException(`No loyalty or products for game ${gameId}`, common_1.HttpStatus.NOT_FOUND);
        }
        const advanced_features = await this.afService.getByGame(gameId, round);
        const spots = await this.spotService.getSpotsByGame(gameId, round);
        segments.forEach((segment) => {
            trademarks.forEach((trademark) => {
                const models_tr = products.filter((prod) => prod.trademarkId == trademark);
                const rate_k1 = (0, brands_functions_1.PriceRate)(segment, models_tr);
                const rate_n1 = (0, brands_functions_1.TypeRate)(segment, models_tr);
                const af_segment = advanced_features.find((item) => item.segmentId == segment.segmentId);
                const rate_f1 = (0, brands_functions_1.AFRate)(af_segment, models_tr);
                const ps = (rate_k1 * rate_n1 + rate_f1 * 2) / 2;
                const spot_tr = spots.find((spot) => spot.trademarkId == trademark);
                const ads = spot_tr ? (0, brands_functions_1.SpotRate)(spot_tr, segment) : 0;
                let loyalty = 0;
                if (ps > ads) {
                    loyalty = ps - ads / 5;
                }
                else if (ps > ads) {
                    loyalty = ps / 3;
                }
                else {
                    loyalty = ps + ads / 5;
                }
                const loyalty_seg_tr = loyalty_prev.find((item) => item.segmentId == segment.segmentId &&
                    item.trademarkId == trademark);
                if (!loyalty_seg_tr) {
                    return console.log('What are fack????');
                }
                loyalty = loyalty + loyalty_seg_tr.loyalty_prev * 0.2;
                loyalty = (0, common_functions_1.roundNumber)(loyalty, 2);
                if (loyalty > 0.9) {
                    loyalty = 0.9;
                }
                if (loyalty_seg_tr.trademarkId === 8) {
                    console.log('ps: ', ps);
                    console.log('ads: ', ads);
                    console.log('loyalty: ', loyalty);
                }
                loyalty_seg_tr.loyalty = loyalty;
                loyalty_seg_tr.save();
            });
        });
        return loyalty_prev;
    }
    async transitionLoyalty(gameId, round) {
        const loyalty = await this.loyaltyRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((loyalty === null || loyalty === void 0 ? void 0 : loyalty.length) > 0) {
            loyalty.forEach(async (item) => {
                const loyalty_prev = item.loyalty;
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    trademarkId: item.trademarkId,
                    segmentId: item.segmentId,
                    loyalty: 0,
                    loyalty_prev,
                };
                try {
                    await this.loyaltyRepository.create(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create loyalty, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
LoyaltyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(loyalty_model_1.Loyalty)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService,
        market_segment_service_1.MarketSegmentService,
        advanced_features_service_1.AdvancedFeaturesService,
        spot_service_1.SpotService])
], LoyaltyService);
exports.LoyaltyService = LoyaltyService;
//# sourceMappingURL=loyalty.service.js.map