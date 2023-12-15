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
exports.MonthSales = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const segment_model_1 = require("../segment/segment.model");
const trademark_model_1 = require("../trademark/trademark.model");
let MonthSales = class MonthSales extends sequelize_typescript_1.Model {
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
], MonthSales.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'game id',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], MonthSales.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], MonthSales.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5',
        description: 'team identifier',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthSales.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'trademark id',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthSales.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'segment id',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => segment_model_1.Segment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthSales.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '_dhhv75',
        description: 'product identifier',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], MonthSales.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'M-01',
        description: 'model name',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], MonthSales.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'month number 1-12',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthSales.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1598',
        description: 'production plan per 1 month (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "available_sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2598',
        description: 'peak market coverage all channels per 1 month (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1598',
        description: 'min(avalabil_sales, capacity) (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "offered_sale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '13588',
        description: 'max model demand per 1 month (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "max_demand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.2',
        description: 'brand important rank',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "rank_bi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.2',
        description: 'brand somehow important rank',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "rank_bsi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.2',
        description: 'brand not important rank',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "rank_bni", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '13588',
        description: 'max sales per subsegment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "max_sales_bi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1588',
        description: 'max sales per subsegment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "max_sales_bsi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1588',
        description: 'max sales per subsegment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "max_sales_bni", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '13588',
        description: '1 normalized sales per segment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '13988',
        description: '2 normalized sales per segment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "sales_normalized", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '13588',
        description: 'inventories per segment (units)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MonthSales.prototype, "inventories", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => segment_model_1.Segment),
    __metadata("design:type", segment_model_1.Segment)
], MonthSales.prototype, "segment", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], MonthSales.prototype, "trademark", void 0);
MonthSales = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'month_sales' })
], MonthSales);
exports.MonthSales = MonthSales;
//# sourceMappingURL=month-sales.model.js.map