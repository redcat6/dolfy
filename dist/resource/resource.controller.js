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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
const create_resource_dto_1 = require("./dto/create-resource.dto");
const resource_model_1 = require("./resource.model");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    create(resourceDto) {
        return this.resourceService.createResource(resourceDto);
    }
    getByGameAndRound(game_id, round) {
        return this.resourceService.getResourcesByGame(game_id, round);
    }
    resourchesTransition(game_id, round) {
        return this.resourceService.transitionResources(game_id, round);
    }
    getResourcesByTeam(teamId, gameId, round) {
        return this.resourceService.getTeamResources(gameId, round, teamId);
    }
    update(obj, id) {
        return this.resourceService.updateResource(id, obj);
    }
    removeById(id) {
        return this.resourceService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'resource creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resource_dto_1.CreateResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all resources by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [resource_model_1.Resource] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition resources by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [resource_model_1.Resource] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "resourchesTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting resources by team_id, game_id & round' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:teamId?'),
    __param(0, (0, common_1.Param)('teamId')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResourcesByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update resource' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete resource by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "removeById", null);
ResourceController = __decorate([
    (0, common_1.Controller)('resource'),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
exports.ResourceController = ResourceController;
//# sourceMappingURL=resource.controller.js.map