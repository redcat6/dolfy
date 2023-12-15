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
exports.MediaCostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const media_costs_model_1 = require("./media-costs.model");
let MediaCostsService = class MediaCostsService {
    constructor(mediaCostsRepository) {
        this.mediaCostsRepository = mediaCostsRepository;
    }
    async createMediaCosts(dto) {
        const media_costs = await this.mediaCostsRepository.create(dto);
        return media_costs;
    }
    async getAllMediaCosts() {
        const media_costs = await this.mediaCostsRepository.findAll();
        return media_costs;
    }
    async getMediaCostsByGame(gameId, round) {
        const media_cistss = await this.mediaCostsRepository.findAll({
            where: { gameId, round },
        });
        return media_cistss;
    }
    async getMediaCostsById(id) {
        const mediaCosts = await this.mediaCostsRepository.findByPk(id);
        return mediaCosts;
    }
    async removeById(id) {
        try {
            const num = await this.mediaCostsRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async transitionMediaCosts(gameId, round) {
        const media_costs = await this.mediaCostsRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((media_costs === null || media_costs === void 0 ? void 0 : media_costs.length) > 0) {
            media_costs.forEach(async (item) => {
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    smm: item.smm,
                    content_ads: item.content_ads,
                    bloggers_influencers: item.bloggers_influencers,
                    postal: item.postal,
                    outdoor_advertising: item.outdoor_advertising,
                    autoradio_podcasts: item.autoradio_podcasts,
                    tv: item.tv,
                };
                try {
                    await this.createMediaCosts(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create media cost, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
MediaCostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(media_costs_model_1.MediaCosts)),
    __metadata("design:paramtypes", [Object])
], MediaCostsService);
exports.MediaCostsService = MediaCostsService;
//# sourceMappingURL=media-costs.service.js.map