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
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const promotion_model_1 = require("./promotion.model");
let PromotionService = class PromotionService {
    constructor(promotionRepository) {
        this.promotionRepository = promotionRepository;
    }
    async createPromotion(dto) {
        const promotion = await this.promotionRepository.create(dto);
        return promotion;
    }
    async getAllPromotions() {
        const products = await this.promotionRepository.findAll({
            include: { all: true },
        });
        return products;
    }
    async getPromotionsByGame(gameId, round) {
        const promotions = await this.promotionRepository.findAll({
            where: { gameId, round },
            order: ['teamId'],
            include: { all: true },
        });
        return promotions;
    }
    async getTeamPromotions(gameId, round, teamId) {
        const promotions = await this.promotionRepository.findAll({
            where: { gameId, round, teamId },
            include: { all: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return promotions;
    }
    async getPromotiontById(id) {
        const promotion = await this.promotionRepository.findByPk(id);
        return promotion;
    }
    async removeById(id) {
        try {
            const num = await this.promotionRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
PromotionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(promotion_model_1.Promotion)),
    __metadata("design:paramtypes", [Object])
], PromotionService);
exports.PromotionService = PromotionService;
//# sourceMappingURL=promotion.service.js.map