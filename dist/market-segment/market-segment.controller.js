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
exports.MarketSegmentController = void 0;
const common_1 = require("@nestjs/common");
const market_segment_service_1 = require("./market-segment.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_market_segment_dto_1 = require("./dto/create-market-segment.dto");
const market_segment_model_1 = require("./market-segment.model");
let MarketSegmentController = class MarketSegmentController {
    constructor(marketSegmentService) {
        this.marketSegmentService = marketSegmentService;
    }
    createSegment(dto) {
        return this.marketSegmentService.createMarketSegment(dto);
    }
    actualSizeCalculating(game_id, round) {
        return this.marketSegmentService.calculateActualSize(game_id, round);
    }
    getSegments() {
        return this.marketSegmentService.getAll();
    }
    getByGame(game_id, round) {
        return this.marketSegmentService.roundTransition(game_id, round);
    }
    segmentsTransition(game_id, round) {
        return this.marketSegmentService.getByGameRound(game_id, round);
    }
    updateSegment(segment, id) {
        return this.marketSegmentService.updateMarketSegment(id, segment);
    }
    deleteSegment(id) {
        return this.marketSegmentService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new market info about segment creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_segment_dto_1.CreateMarketSegmentDto]),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "createSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'calculating the segments actual peak size' }),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('/actualSize/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "actualSizeCalculating", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all market info about segments' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [market_segment_model_1.MarketSegment] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "getSegments", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition segments by game & round',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "getByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all market info about segments by game & round',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "segmentsTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'edit market info about segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_segment_dto_1.CreateMarketSegmentDto, Number]),
    __metadata("design:returntype", void 0)
], MarketSegmentController.prototype, "updateSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete segment by id' }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarketSegmentController.prototype, "deleteSegment", null);
MarketSegmentController = __decorate([
    (0, common_1.Controller)('market-segment'),
    __metadata("design:paramtypes", [market_segment_service_1.MarketSegmentService])
], MarketSegmentController);
exports.MarketSegmentController = MarketSegmentController;
//# sourceMappingURL=market-segment.controller.js.map