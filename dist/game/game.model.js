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
exports.Game = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const users_model_1 = require("../users/users.model");
let Game = class Game extends sequelize_typescript_1.Model {
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
], Game.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current game round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Game.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'rounds number of the game' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 6 }),
    __metadata("design:type", Number)
], Game.prototype, "rounds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'number of the teams of the game' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 5 }),
    __metadata("design:type", Number)
], Game.prototype, "num_teams", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'standart',
        description: 'one of the category  of game: simple, standart, advanced. game_id == segment category',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['simple', 'standart', 'advanced'],
        defaultValue: 'standart',
    }),
    __metadata("design:type", String)
], Game.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'game for group Eki05 H1 2023',
        description: 'description of game',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Game.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'identifier of professor who created the game',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Game.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Game.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => team_model_1.Team),
    __metadata("design:type", Array)
], Game.prototype, "teams", void 0);
Game = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'games' })
], Game);
exports.Game = Game;
//# sourceMappingURL=game.model.js.map