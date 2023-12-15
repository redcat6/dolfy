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
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_team_dto_1 = require("./dto/create-team.dto");
const team_service_1 = require("./team.service");
let TeamController = class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    createGame(teamDto) {
        return this.teamService.createTeam(teamDto);
    }
    getAllGames(game_id, limit) {
        return this.teamService.getAllGamesTeam(game_id, limit);
    }
    getTeamById(teamId) {
        return this.teamService.getTeamById(teamId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new team creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "createGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "get all games'teams" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'PROFESSOR'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getAllGames", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get team by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:teamId'),
    __param(0, (0, common_1.Param)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getTeamById", null);
TeamController = __decorate([
    (0, swagger_1.ApiTags)('Teams'),
    (0, common_1.Controller)('teams'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map