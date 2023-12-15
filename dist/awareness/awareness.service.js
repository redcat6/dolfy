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
exports.AwarenessService = void 0;
const common_1 = require("@nestjs/common");
const awareness_model_1 = require("./awareness.model");
const sequelize_1 = require("@nestjs/sequelize");
const channel_service_1 = require("../channel/channel.service");
const brands_functions_1 = require("../functions/brands.functions");
const market_segment_service_1 = require("../market-segment/market-segment.service");
const segment_functions_1 = require("../functions/segment.functions");
const spot_service_1 = require("../spot/spot.service");
const common_functions_1 = require("../functions/common.functions");
const trademark_model_1 = require("../trademark/trademark.model");
let AwarenessService = class AwarenessService {
    constructor(awarenessRepository, channelService, marketSegmentService, spotService) {
        this.awarenessRepository = awarenessRepository;
        this.channelService = channelService;
        this.marketSegmentService = marketSegmentService;
        this.spotService = spotService;
    }
    async createAwareness(dto) {
        const result = await this.awarenessRepository.create(dto);
        return result;
    }
    async getAllAwareness() {
        const awareness = await this.awarenessRepository.findAll({
            include: { all: true },
        });
        return awareness;
    }
    async getAwarenessByGame(gameId, round) {
        const awareness = await this.awarenessRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        return awareness;
    }
    async getAwarenessById(id) {
        const resource = await this.awarenessRepository.findByPk(id);
        return resource;
    }
    async updateAwareness(id, awareness) {
        try {
            const num = await this.awarenessRepository.update(awareness, {
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
            const num = await this.awarenessRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async calculateAwareness(gameId, round) {
        const awareness_prev = await this.awarenessRepository.findAll({
            where: { gameId, round },
            include: [trademark_model_1.Trademark],
        });
        const channels = await this.channelService.getChannelsByGame(gameId, round);
        if (!awareness_prev || !channels) {
            throw new common_1.HttpException(`No awareness or retail channels for game ${gameId}`, common_1.HttpStatus.NOT_FOUND);
        }
        const segments = await this.marketSegmentService.getByGameRound(gameId, round);
        const spots = await this.spotService.getSpotsByGame(gameId, round);
        awareness_prev.forEach((item) => {
            const brand_coverage = (0, brands_functions_1.BrandCoverage)(item.trademarkId, channels);
            const peak_size = (0, segment_functions_1.totalMarket)(segments);
            const retail_market_coverage = brand_coverage / peak_size;
            let promo_rate = 0;
            const spot = spots.find((it) => it.trademarkId === item.trademarkId);
            if (spot) {
                promo_rate = (0, brands_functions_1.PromoRate)(spot);
            }
            const max = Math.max(retail_market_coverage, promo_rate);
            const min = Math.min(retail_market_coverage, promo_rate);
            let awareness = max + min / 5 + item.awareness_prev * 0.2;
            awareness = (0, common_functions_1.roundNumber)(awareness, 2);
            if (awareness > 0.9) {
                awareness = 0.9;
            }
            item.awareness = awareness;
            item.save();
        });
        return awareness_prev;
    }
    async transitionAwareness(gameId, round) {
        const awareness = await this.awarenessRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((awareness === null || awareness === void 0 ? void 0 : awareness.length) > 0) {
            awareness.forEach(async (item) => {
                const awareness_prev = item.awareness;
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    trademarkId: item.trademarkId,
                    awareness: 0,
                    awareness_prev,
                };
                try {
                    await this.awarenessRepository.create(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create awareness, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
AwarenessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(awareness_model_1.Awareness)),
    __metadata("design:paramtypes", [Object, channel_service_1.ChannelService,
        market_segment_service_1.MarketSegmentService,
        spot_service_1.SpotService])
], AwarenessService);
exports.AwarenessService = AwarenessService;
//# sourceMappingURL=awareness.service.js.map