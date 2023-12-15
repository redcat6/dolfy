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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const channel_model_1 = require("../channel/channel.model");
const game_model_1 = require("../game/game.model");
const product_model_1 = require("../product/product.model");
const resource_model_1 = require("../resource/resource.model");
const spot_model_1 = require("../spot/spot.model");
let Team = class Team extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'unique identifier' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alpha', description: 'team name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the game identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => game_model_1.Game),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Team.prototype, "gameId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => game_model_1.Game),
    __metadata("design:type", game_model_1.Game)
], Team.prototype, "game", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.Product),
    __metadata("design:type", Array)
], Team.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => channel_model_1.Channel),
    __metadata("design:type", Array)
], Team.prototype, "channels", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => resource_model_1.Resource),
    __metadata("design:type", Array)
], Team.prototype, "resources", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => spot_model_1.Spot),
    __metadata("design:type", Array)
], Team.prototype, "spots", void 0);
Team = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'teams' })
], Team);
exports.Team = Team;
//# sourceMappingURL=team.model.js.map