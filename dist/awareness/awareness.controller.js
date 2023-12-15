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
exports.AwarenessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const awareness_service_1 = require("./awareness.service");
const create_awareness_dto_1 = require("./dto/create-awareness.dto");
const awareness_model_1 = require("./awareness.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AwarenessController = class AwarenessController {
    constructor(awarenessService) {
        this.awarenessService = awarenessService;
    }
    create(dto) {
        return this.awarenessService.createAwareness(dto);
    }
    calculateByGameAndRound(game_id, round) {
        return this.awarenessService.calculateAwareness(game_id, round);
    }
    awarenessTransition(game_id, round) {
        return this.awarenessService.transitionAwareness(game_id, round);
    }
    getByGameAndRound(game_id, round) {
        return this.awarenessService.getAwarenessByGame(game_id, round);
    }
    removeById(id) {
        return this.awarenessService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'awareness creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_awareness_dto_1.CreateAwarenessDto]),
    __metadata("design:returntype", Promise)
], AwarenessController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'awareness calculating by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [awareness_model_1.Awareness] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AwarenessController.prototype, "calculateByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'awareness transition by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [awareness_model_1.Awareness] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AwarenessController.prototype, "awarenessTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get awareness by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [awareness_model_1.Awareness] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AwarenessController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete awareness by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AwarenessController.prototype, "removeById", null);
AwarenessController = __decorate([
    (0, common_1.Controller)('awareness'),
    __metadata("design:paramtypes", [awareness_service_1.AwarenessService])
], AwarenessController);
exports.AwarenessController = AwarenessController;
//# sourceMappingURL=awareness.controller.js.map