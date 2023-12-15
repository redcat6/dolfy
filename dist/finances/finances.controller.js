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
exports.FinancesController = void 0;
const common_1 = require("@nestjs/common");
const finances_service_1 = require("./finances.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_finances_dto_1 = require("./dto/create-finances.dto");
const finances_model_1 = require("./finances.model");
const swagger_1 = require("@nestjs/swagger");
let FinancesController = class FinancesController {
    constructor(financesService) {
        this.financesService = financesService;
    }
    create(dto) {
        return this.financesService.createFinances(dto);
    }
    getByGameAndRound(game_id, round) {
        return this.financesService.getFinancesByGame(game_id, round);
    }
    calculateByGameAndRound(game_id, round) {
        return this.financesService.calculateFinances(game_id, round);
    }
    financesTransition(game_id, round) {
        return this.financesService.transitionFinances(game_id, round);
    }
    getFinancesByTeam(teamId, gameId, round) {
        return this.financesService.getTeamFinances(gameId, round, teamId);
    }
    update(dto, id) {
        return this.financesService.updateFinances(id, dto);
    }
    removeById(id) {
        return this.financesService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'finances creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_finances_dto_1.CreateFinancesDto]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all finances by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [finances_model_1.Finances] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'calculate finances by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [finances_model_1.Finances] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "calculateByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition finances by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [finances_model_1.Finances] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "financesTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting finances by team_id, game_id & round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:teamId?'),
    __param(0, (0, common_1.Param)('teamId')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "getFinancesByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update finances' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_finances_dto_1.CreateFinancesDto, Number]),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete finances by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FinancesController.prototype, "removeById", null);
FinancesController = __decorate([
    (0, common_1.Controller)('finances'),
    __metadata("design:paramtypes", [finances_service_1.FinancesService])
], FinancesController);
exports.FinancesController = FinancesController;
//# sourceMappingURL=finances.controller.js.map