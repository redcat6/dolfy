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
exports.Segment = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const advanced_features_model_1 = require("../advanced-features/advanced-features.model");
const market_segment_model_1 = require("../market-segment/market-segment.model");
let Segment = class Segment extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'unique segment identifier' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Segment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'simple',
        description: 'category of segment',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['simple', 'standart', 'advanced'],
        defaultValue: 'standart',
    }),
    __metadata("design:type", String)
], Segment.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'School',
        description: 'name of segment',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Segment.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1520', description: 'peak size of segment' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Segment.prototype, "peak_size", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => market_segment_model_1.MarketSegment),
    __metadata("design:type", Array)
], Segment.prototype, "segment_params", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => advanced_features_model_1.AdvancedFeature),
    __metadata("design:type", Array)
], Segment.prototype, "advanced_features", void 0);
Segment = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'segments' })
], Segment);
exports.Segment = Segment;
//# sourceMappingURL=segment.model.js.map