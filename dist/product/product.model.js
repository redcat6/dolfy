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
exports.Product = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
let Product = class Product extends sequelize_typescript_1.Model {
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
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1err680kh',
        description: 'unique identifier table',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Product.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of game' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'team identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'id of trademark' }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'model 1',
        description: 'name of product model',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Product.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'month when the product will be available',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "available_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'month till the product will be available',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 12 }),
    __metadata("design:type", Number)
], Product.prototype, "available_till", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'level of material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'level of manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "manufacturing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'level of design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "design", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'business', description: 'type of design' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['classic', 'business', 'casual', 'innovative', 'art'],
    }),
    __metadata("design:type", String)
], Product.prototype, "design_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'variations of model' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "variations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'positioning tracker',
        description: 'advanced feature of product',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        defaultValue: '',
    }),
    __metadata("design:type", String)
], Product.prototype, "advanced_feature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'sales plan',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "sales_plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'production plan' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "production_plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2500', description: 'R&D spending' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "investments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.3', description: 'cost of 1 product unit' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "unit_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '48.2', description: 'recommended retail price' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "retail_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45.8', description: 'ex-works price' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'inventories disposal volume beginning',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "inventories_beginning", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2000',
        description: 'inventories disposal volume end',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "inventories_end", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Product.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], Product.prototype, "trademark", void 0);
Product = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'products' })
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map