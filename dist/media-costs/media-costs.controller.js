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
exports.MediaCostsController = void 0;
const common_1 = require("@nestjs/common");
const media_costs_service_1 = require("./media-costs.service");
const swagger_1 = require("@nestjs/swagger");
const create_media_costs_dto_1 = require("./dto/create-media-costs.dto");
const media_costs_model_1 = require("./media-costs.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let MediaCostsController = class MediaCostsController {
    constructor(mediaCostsService) {
        this.mediaCostsService = mediaCostsService;
    }
    create(dto) {
        return this.mediaCostsService.createMediaCosts(dto);
    }
    getByGameAndRound(game_id, round) {
        return this.mediaCostsService.getMediaCostsByGame(game_id, round);
    }
    transitionNextRond(game_id, round) {
        return this.mediaCostsService.transitionMediaCosts(game_id, round);
    }
    removeById(id) {
        return this.mediaCostsService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'media costs creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_media_costs_dto_1.CreateMediaCostsDto]),
    __metadata("design:returntype", Promise)
], MediaCostsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all media costs by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [media_costs_model_1.MediaCosts] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MediaCostsController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition media costs by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [media_costs_model_1.MediaCosts] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MediaCostsController.prototype, "transitionNextRond", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete medis costs by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MediaCostsController.prototype, "removeById", null);
MediaCostsController = __decorate([
    (0, common_1.Controller)('media-costs'),
    __metadata("design:paramtypes", [media_costs_service_1.MediaCostsService])
], MediaCostsController);
exports.MediaCostsController = MediaCostsController;
//# sourceMappingURL=media-costs.controller.js.map