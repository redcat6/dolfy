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
exports.SpotService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const spot_model_1 = require("./spot.model");
let SpotService = class SpotService {
    constructor(spotRepository) {
        this.spotRepository = spotRepository;
    }
    async createSpot(dto) {
        const spot = await this.spotRepository.create(dto);
        return spot;
    }
    async getAllSpots() {
        const spots = await this.spotRepository.findAll({
            include: { all: true },
        });
        return spots;
    }
    async getSpotsByGame(gameId, round) {
        const spots = await this.spotRepository.findAll({
            where: { gameId, round },
            order: ['teamId'],
            include: { all: true },
        });
        return spots;
    }
    async getSpotByTrademark(gameId, round, trademarkId) {
        const spot = await this.spotRepository.findOne({
            where: { gameId, round, trademarkId },
        });
        return spot;
    }
    async getTeamSpots(gameId, round, teamId) {
        const spots = await this.spotRepository.findAll({
            where: { gameId, round, teamId },
            include: { all: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return spots;
    }
    async getSpotById(id) {
        const spot = await this.spotRepository.findByPk(id);
        return spot;
    }
    async removeById(id) {
        try {
            const num = await this.spotRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async transitionSpot(gameId, round) {
        const spots = await this.spotRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((spots === null || spots === void 0 ? void 0 : spots.length) > 0) {
            spots.forEach(async (item) => {
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    teamId: item.teamId,
                    register_round: Number(item.register_round),
                    name: item.name,
                    core_message: item.core_message,
                    advanced_feature: item.advanced_feature,
                    price: item.price,
                    value: item.value,
                    objective: item.objective,
                    quality: item.quality,
                    trademarkId: item.trademarkId,
                    segments: item.segments,
                    channels: item.channels,
                    investments: 0,
                    operations: item.operations,
                };
                try {
                    await this.spotRepository.create(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create spot, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
SpotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(spot_model_1.Spot)),
    __metadata("design:paramtypes", [Object])
], SpotService);
exports.SpotService = SpotService;
//# sourceMappingURL=spot.service.js.map