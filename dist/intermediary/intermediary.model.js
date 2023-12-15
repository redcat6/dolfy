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
exports.Intermediary = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const team_model_1 = require("../team/team.model");
let Intermediary = class Intermediary extends sequelize_typescript_1.Model {
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
], Intermediary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the game identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => game_model_1.Game),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Intermediary.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the team identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Intermediary.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team production assets',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Intermediary.prototype, "production_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '22500.8',
        description: 'team retail assets',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Intermediary.prototype, "retail_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '22345.8',
        description: 'team production depreciation',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Intermediary.prototype, "production_depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2456', description: 'retail depreciation' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Intermediary.prototype, "retail_depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10000.0',
        description: 'team franchise sales',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "franchise_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2377.1',
        description: 'franchise fee',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Intermediary.prototype, "franchise_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15000',
        description: 'retail entry',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "retail_entry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'retail annual fee',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "retail_annual_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team invest assets',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "invest_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team retail invest',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "invest_retail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team retail lost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "retail_writte_off", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team retail operation costs',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "operate_retail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team market research',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "market_research", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team invest promotion',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "invest_promo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team running promotion',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "running_promo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team invetories current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "inventories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'team inventories of the updated models by end of the period',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Intermediary.prototype, "inventories_writte_off", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Intermediary.prototype, "team", void 0);
Intermediary = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'intermediary_indicators' })
], Intermediary);
exports.Intermediary = Intermediary;
//# sourceMappingURL=intermediary.model.js.map