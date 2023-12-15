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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_game_dto_1 = require("./dto/create-game.dto");
const game_service_1 = require("./game.service");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    createGame(gameDto) {
        return this.gameService.createGame(gameDto);
    }
    getAllGames() {
        return this.gameService.getAllGames();
    }
    update(obj, id) {
        return this.gameService.updateGame(id, obj);
    }
    getGameById(id) {
        return this.gameService.getGameById(id);
    }
    getUserGames(user_id) {
        return this.gameService.getAllUserGames(user_id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new game creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_dto_1.CreateGameDto]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "createGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'all game' }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getAllGames", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update game' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get game by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getGameById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all professor games' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('/users/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getUserGames", null);
GameController = __decorate([
    (0, swagger_1.ApiTags)('Game'),
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map