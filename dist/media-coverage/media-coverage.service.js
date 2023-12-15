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
exports.MediaCoverageService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const media_coverage_model_1 = require("./media-coverage.model");
let MediaCoverageService = class MediaCoverageService {
    constructor(mediaCoverageRepository) {
        this.mediaCoverageRepository = mediaCoverageRepository;
    }
    async createMediaCoverage(dto) {
        const media_coverage = await this.mediaCoverageRepository.create(dto);
        return media_coverage;
    }
    async getAllMediaCoverage() {
        const media_coverage = await this.mediaCoverageRepository.findAll();
        return media_coverage;
    }
    async getMediaCoverageByGame(gameId, round) {
        const media_coverage = await this.mediaCoverageRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        return media_coverage;
    }
    async getMediaCoverageById(id) {
        const mediaCoverage = await this.mediaCoverageRepository.findByPk(id);
        return mediaCoverage;
    }
    async removeById(id) {
        try {
            const num = await this.mediaCoverageRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async transitionMediaCoverage(gameId, round) {
        const media_covs = await this.mediaCoverageRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((media_covs === null || media_covs === void 0 ? void 0 : media_covs.length) > 0) {
            media_covs.forEach(async (item) => {
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
                    segmentId: item.segmentId,
                };
                try {
                    await this.createMediaCoverage(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create media coverage, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
MediaCoverageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(media_coverage_model_1.MediaCoverage)),
    __metadata("design:paramtypes", [Object])
], MediaCoverageService);
exports.MediaCoverageService = MediaCoverageService;
//# sourceMappingURL=media-coverage.service.js.map