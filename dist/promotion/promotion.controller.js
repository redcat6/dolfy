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
exports.PromotionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const promotion_service_1 = require("./promotion.service");
const create_promotion_dto_1 = require("./dto/create-promotion.dto");
const promotion_model_1 = require("./promotion.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PromotionController = class PromotionController {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }
    create(promotionDto) {
        return this.promotionService.createPromotion(promotionDto);
    }
    getByGameAndRound(game_id, round) {
        return this.promotionService.getPromotionsByGame(game_id, round);
    }
    getPromotionsByTeam(team_id, gameId, round) {
        return this.promotionService.getTeamPromotions(gameId, round, team_id);
    }
    removeById(id) {
        return this.promotionService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'promotion action creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_promotion_dto_1.CreatePromotionDto]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all promotions by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [promotion_model_1.Promotion] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting promotions by game id & round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:team_id?'),
    __param(0, (0, common_1.Param)('team_id')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "getPromotionsByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete promotion by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "removeById", null);
PromotionController = __decorate([
    (0, common_1.Controller)('promotion'),
    __metadata("design:paramtypes", [promotion_service_1.PromotionService])
], PromotionController);
exports.PromotionController = PromotionController;
//# sourceMappingURL=promotion.controller.js.map