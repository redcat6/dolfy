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
exports.IntermediaryController = void 0;
const common_1 = require("@nestjs/common");
const intermediary_service_1 = require("./intermediary.service");
const intermediary_model_1 = require("./intermediary.model");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_intermediary_dto_1 = require("./dto/create-intermediary.dto");
let IntermediaryController = class IntermediaryController {
    constructor(intermediaryService) {
        this.intermediaryService = intermediaryService;
    }
    create(dto) {
        return this.intermediaryService.createIntermediary(dto);
    }
    getByGameAndRound(game_id, round) {
        return this.intermediaryService.getIntermediaryByGame(game_id, round);
    }
    calculateIntermediary(game_id, round) {
        return this.intermediaryService.calculateIndermediary(game_id, round);
    }
    intermediaryTransition(game_id, round) {
        return this.intermediaryService.transitionIndermediary(game_id, round);
    }
    getFinancesByTeam(teamId, gameId, round) {
        return this.intermediaryService.getTeamIntermediary(gameId, round, teamId);
    }
    update(obj, id) {
        return this.intermediaryService.updateIntermediary(id, obj);
    }
    removeById(id) {
        return this.intermediaryService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'intermediary creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_intermediary_dto_1.CreateIntermediaryDto]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all intermediary by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [intermediary_model_1.Intermediary] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'calculate intermediary by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [intermediary_model_1.Intermediary] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "calculateIntermediary", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition intermediary by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [intermediary_model_1.Intermediary] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "intermediaryTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting intermediary by team_id, game_id & round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:teamId?'),
    __param(0, (0, common_1.Param)('teamId')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "getFinancesByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update intermediary' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], IntermediaryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete intermediary by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IntermediaryController.prototype, "removeById", null);
IntermediaryController = __decorate([
    (0, common_1.Controller)('intermediary'),
    __metadata("design:paramtypes", [intermediary_service_1.IntermediaryService])
], IntermediaryController);
exports.IntermediaryController = IntermediaryController;
//# sourceMappingURL=intermediary.controller.js.map