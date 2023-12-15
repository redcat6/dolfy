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
exports.Sales = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
let Sales = class Sales extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '100',
        description: 'unique table identifier',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Sales.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of game' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'team identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'id of trademark' }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1err680kh',
        description: 'unique product identifier',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Sales.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'model 1',
        description: 'name of product model',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Sales.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2000', description: 'production plan' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "production_plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2500',
        description: 'sold product per year in units',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "sales_units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'sold product per year in cash' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'inventories disposal volume beginning',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "inventories_beginning", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'inventories disposal volume end',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Sales.prototype, "inventories_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[Alpha store, Betta brick&mortar store]',
        description: "channels' names array where product was sold",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING), defaultValue: [] }),
    __metadata("design:type", Array)
], Sales.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[250, 1520]',
        description: 'array of the sales in units (product sold by channels)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.REAL), defaultValue: [] }),
    __metadata("design:type", Array)
], Sales.prototype, "channels_sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[250, 1520]',
        description: 'array of the sales in cash (product sold by channels)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.REAL), defaultValue: [] }),
    __metadata("design:type", Array)
], Sales.prototype, "channels_sales_cash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[250, 1520]',
        description: 'array of the sales promotions (cashback & gift_cost) by channels',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.REAL), defaultValue: [] }),
    __metadata("design:type", Array)
], Sales.prototype, "channels_promotion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Sales.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], Sales.prototype, "trademark", void 0);
Sales = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'sales' })
], Sales);
exports.Sales = Sales;
//# sourceMappingURL=sales.model.js.map