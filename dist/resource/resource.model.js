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
exports.Resource = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const team_model_1 = require("../team/team.model");
let Resource = class Resource extends sequelize_typescript_1.Model {
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
], Resource.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the game identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => game_model_1.Game),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Resource.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the team identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Resource.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team capacities for current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Resource.prototype, "capacities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'team capacities for next round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "capacities_increase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15000',
        description: 'current long-term dept',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "long_term_debt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'borrowings',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "borrowings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'array of the segmments for resarch (max 2 per round)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING), defaultValue: null }),
    __metadata("design:type", Array)
], Resource.prototype, "research_segments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'research costs',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "research_costs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => game_model_1.Game),
    __metadata("design:type", game_model_1.Game)
], Resource.prototype, "game", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Resource.prototype, "team", void 0);
Resource = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'resources' })
], Resource);
exports.Resource = Resource;
//# sourceMappingURL=resource.model.js.map