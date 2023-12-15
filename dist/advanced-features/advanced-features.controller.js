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
exports.AdvancedFeaturesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_features_dto_1 = require("./dto/create-features.dto");
const advanced_features_service_1 = require("./advanced-features.service");
let AdvancedFeaturesController = class AdvancedFeaturesController {
    constructor(advancedFeatureService) {
        this.advancedFeatureService = advancedFeatureService;
    }
    createAF(dto) {
        console.log(dto);
        return this.advancedFeatureService.createAF(dto);
    }
    getAllAF() {
        return this.advancedFeatureService.getAll();
    }
    calculateAcceptance(game_id, round) {
        return this.advancedFeatureService.calculateAcceptance(game_id, round);
    }
    goNextNeeds(game_id, round) {
        return this.advancedFeatureService.transitionNeeds(game_id, round);
    }
    getByGame(game_id, round) {
        return this.advancedFeatureService.getByGame(game_id, round);
    }
    updateSegment(af, id) {
        return this.advancedFeatureService.updateAF(id, af);
    }
    deleteSegment(id) {
        return this.advancedFeatureService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new advanced feature creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_features_dto_1.CreateAFDto]),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "createAF", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'all advanced features' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "getAllAF", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'calculating the advanced features acceptance by game and current round',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/acceptance/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "calculateAcceptance", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition advanced needs by game to next round',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "goNextNeeds", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get advanced features by game and current round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "getByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'edit advanced feature needs by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_features_dto_1.CreateAFDto, Number]),
    __metadata("design:returntype", void 0)
], AdvancedFeaturesController.prototype, "updateSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete advanced feature by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdvancedFeaturesController.prototype, "deleteSegment", null);
AdvancedFeaturesController = __decorate([
    (0, common_1.Controller)('advanced-features'),
    __metadata("design:paramtypes", [advanced_features_service_1.AdvancedFeaturesService])
], AdvancedFeaturesController);
exports.AdvancedFeaturesController = AdvancedFeaturesController;
//# sourceMappingURL=advanced-features.controller.js.map