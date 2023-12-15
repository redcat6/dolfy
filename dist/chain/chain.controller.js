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
exports.ChainController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const chain_service_1 = require("./chain.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_chain_dto_1 = require("./dto/create-chain.dto");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let ChainController = class ChainController {
    constructor(chainService) {
        this.chainService = chainService;
    }
    createChain(dto) {
        return this.chainService.createChain(dto);
    }
    getChainsByGame(game_id) {
        return this.chainService.getByGame(game_id);
    }
    updateChain(chain, id) {
        return this.chainService.updateChain(id, chain);
    }
    deleteSegment(id) {
        return this.chainService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new chain creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chain_dto_1.CreateChainDto]),
    __metadata("design:returntype", Promise)
], ChainController.prototype, "createChain", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all independent chains' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:game_id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('game_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChainController.prototype, "getChainsByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'edit segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chain_dto_1.CreateChainDto, Number]),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "updateChain", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChainController.prototype, "deleteSegment", null);
ChainController = __decorate([
    (0, swagger_1.ApiTags)('Independent chain'),
    (0, common_1.Controller)('chain'),
    __metadata("design:paramtypes", [chain_service_1.ChainService])
], ChainController);
exports.ChainController = ChainController;
//# sourceMappingURL=chain.controller.js.map