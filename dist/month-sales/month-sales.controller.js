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
exports.MonthSalesController = void 0;
const common_1 = require("@nestjs/common");
const month_sales_service_1 = require("./month-sales.service");
const create_month_sales_dto_1 = require("./dto/create-month-sales.dto");
const month_sales_model_1 = require("./month-sales.model");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let MonthSalesController = class MonthSalesController {
    constructor(monthSalesService) {
        this.monthSalesService = monthSalesService;
    }
    create(dto) {
        return this.monthSalesService.createMonthSales(dto);
    }
    getByGameAndRound(game_id, round) {
        return this.monthSalesService.getMonthSalesByGame(game_id, round);
    }
    getSalesByTeam(team_id, gameId, round) {
        return this.monthSalesService.getTeamMonthSales(gameId, round, team_id);
    }
    calculateByGameAndRound(game_id, round) {
        return this.monthSalesService.calculateMonthSales(game_id, round);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'month sales creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_month_sales_dto_1.CreateMonthSalesDto]),
    __metadata("design:returntype", Promise)
], MonthSalesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all month sales by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [month_sales_model_1.MonthSales] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MonthSalesController.prototype, "getByGameAndRound", null);
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
], MonthSalesController.prototype, "getSalesByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'month sales calculating by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [month_sales_model_1.MonthSales] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MonthSalesController.prototype, "calculateByGameAndRound", null);
MonthSalesController = __decorate([
    (0, common_1.Controller)('month-sales'),
    __metadata("design:paramtypes", [month_sales_service_1.MonthSalesService])
], MonthSalesController);
exports.MonthSalesController = MonthSalesController;
//# sourceMappingURL=month-sales.controller.js.map