"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const game_model_1 = require("../game/game.model");
const users_model_1 = require("../users/users.model");
const team_controller_1 = require("./team.controller");
const team_model_1 = require("./team.model");
const team_service_1 = require("./team.service");
const jwt_1 = require("@nestjs/jwt");
const product_model_1 = require("../product/product.model");
const channel_model_1 = require("../channel/channel.model");
let TeamModule = class TeamModule {
};
TeamModule = __decorate([
    (0, common_1.Module)({
        controllers: [team_controller_1.TeamController],
        providers: [team_service_1.TeamService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([team_model_1.Team, game_model_1.Game, users_model_1.User, product_model_1.Product, channel_model_1.Channel]),
            jwt_1.JwtModule,
        ],
        exports: [team_service_1.TeamService],
    })
], TeamModule);
exports.TeamModule = TeamModule;
//# sourceMappingURL=team.module.js.map