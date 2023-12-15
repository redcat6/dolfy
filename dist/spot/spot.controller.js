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
exports.SpotController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const spot_service_1 = require("./spot.service");
const create_spot_dto_1 = require("./dto/create-spot.dto");
const spot_model_1 = require("./spot.model");
let SpotController = class SpotController {
    constructor(spotService) {
        this.spotService = spotService;
    }
    create(spotDto) {
        return this.spotService.createSpot(spotDto);
    }
    getByGameAndRound(game_id, round) {
        return this.spotService.getSpotsByGame(game_id, round);
    }
    spotTransition(game_id, round) {
        return this.spotService.transitionSpot(game_id, round);
    }
    getProductsByTeam(team_id, gameId, round) {
        return this.spotService.getTeamSpots(gameId, round, team_id);
    }
    removeById(id) {
        return this.spotService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'spot creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_spot_dto_1.CreateSpotDto]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all spots by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [spot_model_1.Spot] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition spots by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [spot_model_1.Spot] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "spotTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting spots by game id & round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:team_id?'),
    __param(0, (0, common_1.Param)('team_id')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "getProductsByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete spot by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "removeById", null);
SpotController = __decorate([
    (0, common_1.Controller)('spot'),
    __metadata("design:paramtypes", [spot_service_1.SpotService])
], SpotController);
exports.SpotController = SpotController;
//# sourceMappingURL=spot.controller.js.map