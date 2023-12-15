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
exports.MarketSegment = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const segment_model_1 = require("../segment/segment.model");
let MarketSegment = class MarketSegment extends sequelize_typescript_1.Model {
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
], MarketSegment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1000',
        description: 'game identifier. id 1 - standart game, 3 - advanced game 2 - simple game',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: 'current round of the game',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1520',
        description: 'segment actual size last year',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "actual_size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '120', description: 'max price for segment' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "max_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '50', description: 'min price for segment' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "min_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.25', description: 'Purchase habits' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "lowest_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.25', description: 'Purchase habits' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "best_quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', description: 'Purchasing preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "on_line", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', description: 'Purchasing preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "off_line", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.5', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "family", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "attractiveness", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "personality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.5', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "social_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.3', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "fun", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "friendship", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.5', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "pets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.5', description: 'Purchasing values' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "independent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'Brand importance' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "brand_high", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.7', description: 'Brand importance' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "brand_not", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'Brand importance' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "brand_somehow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.5', description: 'design type preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_classic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_art", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.6', description: 'design type preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_business", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.2', description: 'design type preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_casual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type preferences' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_innovative", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'design quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "design_5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "material_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "material_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "material_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "material_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'material quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "material_5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "manufacturing_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "manufacturing_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "manufacturing_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "manufacturing_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'manufacturing quality' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "manufacturing_5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'segment identifier' }),
    (0, sequelize_typescript_1.ForeignKey)(() => segment_model_1.Segment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MarketSegment.prototype, "segmentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => segment_model_1.Segment),
    __metadata("design:type", segment_model_1.Segment)
], MarketSegment.prototype, "segment", void 0);
MarketSegment = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'market_segments' })
], MarketSegment);
exports.MarketSegment = MarketSegment;
//# sourceMappingURL=market-segment.model.js.map