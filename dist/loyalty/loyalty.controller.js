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
exports.LoyaltyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const loyalty_service_1 = require("./loyalty.service");
const create_loyalty_dto_1 = require("./dto/create-loyalty.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const loyalty_model_1 = require("./loyalty.model");
let LoyaltyController = class LoyaltyController {
    constructor(loyaltyService) {
        this.loyaltyService = loyaltyService;
    }
    create(dto) {
        return this.loyaltyService.createLoyalty(dto);
    }
    calculateByGameAndRound(game_id, round) {
        return this.loyaltyService.calculateLoyalty(game_id, round);
    }
    loyaltyTransition(game_id, round) {
        return this.loyaltyService.transitionLoyalty(game_id, round);
    }
    getByGameAndRound(game_id, round) {
        return this.loyaltyService.getLoyaltyByGame(game_id, round);
    }
    removeById(id) {
        return this.loyaltyService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'loyalty creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loyalty_dto_1.CreateLoyaltyDto]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'loyalty calculating by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [loyalty_model_1.Loyalty] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "calculateByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'loyalty transition by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [loyalty_model_1.Loyalty] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "loyaltyTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get loyalty by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [loyalty_model_1.Loyalty] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete loyalty by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "removeById", null);
LoyaltyController = __decorate([
    (0, common_1.Controller)('loyalty'),
    __metadata("design:paramtypes", [loyalty_service_1.LoyaltyService])
], LoyaltyController);
exports.LoyaltyController = LoyaltyController;
//# sourceMappingURL=loyalty.controller.js.map