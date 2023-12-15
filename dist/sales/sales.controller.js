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
exports.SalesController = void 0;
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const sales_model_1 = require("./sales.model");
const create_sales_dto_1 = require("./dto/create-sales.dto");
const swagger_1 = require("@nestjs/swagger");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    create(sales) {
        return this.salesService.createSales(sales);
    }
    getByGameAndRound(game_id, round) {
        console.log('round: ', round);
        return this.salesService.getSalesByGame(game_id, round);
    }
    getSalesByTeam(team_id, gameId, round) {
        return this.salesService.getTeamSales(gameId, round, team_id);
    }
    update(dto, id) {
        return this.salesService.updateSales(id, dto);
    }
    removeById(id) {
        return this.salesService.removeById(id);
    }
    calculateByGameAndRound(game_id, round) {
        return this.salesService.calculateSales(game_id, round);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'sales creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_dto_1.CreateSalesDto]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all sales by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [sales_model_1.Sales] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "getting team's sales by game id & round" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:team_id?'),
    __param(0, (0, common_1.Param)('team_id')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getSalesByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update sales' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_dto_1.CreateSalesDto, Number]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete sales by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "removeById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'calculate sales by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [sales_model_1.Sales] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "calculateByGameAndRound", null);
SalesController = __decorate([
    (0, common_1.Controller)('sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map