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
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const channel_service_1 = require("./channel.service");
const swagger_1 = require("@nestjs/swagger");
const channel_model_1 = require("./channel.model");
const create_channel_dto_1 = require("./dto/create-channel.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const add_trademark_dto_1 = require("./dto/add-trademark.dto");
let ChannelController = class ChannelController {
    constructor(channelService) {
        this.channelService = channelService;
    }
    create(dto) {
        return this.channelService.createChannel(dto);
    }
    updateTrademarks(dto) {
        return this.channelService.addTrademark(dto);
    }
    deleteTrademark(channelId, trademark) {
        return this.channelService.removeTrademark(channelId, trademark);
    }
    getChannelById(id) {
        return this.channelService.getChannelById(id);
    }
    getNeedsByGame(game_id, round) {
        return this.channelService.getChannelsByGame(game_id, round);
    }
    getIndependentByGame(game_id, round) {
        return this.channelService.calculateIndependentChains(game_id, round);
    }
    getFrinchiseByGame(game_id, round) {
        return this.channelService.calculateFranchiseStores(game_id, round);
    }
    channelTransition(game_id, round) {
        return this.channelService.transitionChannel(game_id, round);
    }
    getChannelsByTeam(team_id, gameId, round) {
        return this.channelService.getTeamChannels(gameId, round, team_id);
    }
    update(dto, id) {
        return this.channelService.updateChannel(id, dto);
    }
    removeById(id) {
        return this.channelService.removeChannelById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'channel creation' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_channel_dto_1.CreateChannelDto]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'add channel trademark' }),
    (0, common_1.Post)('/trademark'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_trademark_dto_1.addTrademarkDto]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "updateTrademarks", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'remove channel trademark' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/trademark/:channelId?'),
    __param(0, (0, common_1.Param)('channelId')),
    __param(1, (0, common_1.Query)('trademark')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "deleteTrademark", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'getting channel by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getChannelById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all channels needs by game_id & round' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [channel_model_1.Channel] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getNeedsByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get channels(registrated in independent chain) by game_id & round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [channel_model_1.Channel] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate_independent/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getIndependentByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get channels(registrated in independent chain) by game_id & round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [channel_model_1.Channel] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/calculate_franchise/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getFrinchiseByGame", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition channelsby game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [channel_model_1.Channel] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "channelTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "getting team's channels by game id, round & team_id",
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:team_id?'),
    __param(0, (0, common_1.Param)('team_id')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getChannelsByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update channel' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete channel by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "removeById", null);
ChannelController = __decorate([
    (0, common_1.Controller)('channel'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelController);
exports.ChannelController = ChannelController;
//# sourceMappingURL=channel.controller.js.map