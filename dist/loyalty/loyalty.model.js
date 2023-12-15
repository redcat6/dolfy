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
exports.Loyalty = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const segment_model_1 = require("../segment/segment.model");
const trademark_model_1 = require("../trademark/trademark.model");
let Loyalty = class Loyalty extends sequelize_typescript_1.Model {
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
], Loyalty.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'game id',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], Loyalty.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], Loyalty.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.5',
        description: 'brand loyalty',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Loyalty.prototype, "loyalty_prev", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.5',
        description: 'brand loyalty',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Loyalty.prototype, "loyalty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'trademark id',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Loyalty.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'segment id',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => segment_model_1.Segment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Loyalty.prototype, "segmentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => segment_model_1.Segment),
    __metadata("design:type", segment_model_1.Segment)
], Loyalty.prototype, "segment", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], Loyalty.prototype, "trademark", void 0);
Loyalty = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'brand_loyalty' })
], Loyalty);
exports.Loyalty = Loyalty;
//# sourceMappingURL=loyalty.model.js.map