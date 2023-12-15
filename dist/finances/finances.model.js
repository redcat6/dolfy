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
exports.Finances = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const team_model_1 = require("../team/team.model");
let Finances = class Finances extends sequelize_typescript_1.Model {
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
], Finances.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the game identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => game_model_1.Game),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Finances.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'the team identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Finances.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Finances.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team fixed assets',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "fixed_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '225.8',
        description: 'team accumulated depreciation',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "accumulated_depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '22345.8',
        description: 'team cash',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Finances.prototype, "cash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'inventories in $' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "inventories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10000.0',
        description: 'team contributed capital',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Finances.prototype, "contributed_capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2377.1',
        description: 'retained profit',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "retained_profit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15000',
        description: 'current long-term dept',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Finances.prototype, "long_term_debt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15000',
        description: 'growth finances',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "growth_finances", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team sales',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team sales',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "less_promo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team sales',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "other_incomes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team CoGs',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "CoGs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2766',
        description: 'G&A expenses',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "ga_expenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2531',
        description: 'M&S expenses',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "ms_expenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '23466',
        description: 'R&D expenses',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "rd_expenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team depreciation',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.5',
        description: 'interests current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "interests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '20000',
        description: 'investments',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "investments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'research costs',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "borrowings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'assum writte_off',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Finances.prototype, "accum_write_off", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Finances.prototype, "team", void 0);
Finances = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'finances' })
], Finances);
exports.Finances = Finances;
//# sourceMappingURL=finances.model.js.map