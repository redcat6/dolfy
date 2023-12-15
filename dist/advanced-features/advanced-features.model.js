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
exports.AdvancedFeature = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const segment_model_1 = require("../segment/segment.model");
let AdvancedFeature = class AdvancedFeature extends sequelize_typescript_1.Model {
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
], AdvancedFeature.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'game id',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'positioning tracker need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "positioning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'power bank need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "power_bank_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'missed items warning need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "missed_items_warning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'danger alarm need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "danger_alarm_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'fridge camera need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "fridge_camera_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'loss insurance need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "loss_insurance_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'environment friendly utilization need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "friendly_utilization_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'profit sharing need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "profit_sharing_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'individual pictures need value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "individual_pictures_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'positioning tracker acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "positioning_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'power bank acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "power_bank_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'missed items warning acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "missed_items_warning_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'danger alarm acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "danger_alarm_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'fridge camera acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "fridge_camera_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'loss insurance acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "loss_insurance_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'environment friendly utilization acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "friendly_utilization_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'profit sharing acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "profit_sharing_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.5',
        description: 'individual pictures acceptance value',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "individual_pictures_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'segment id',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => segment_model_1.Segment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AdvancedFeature.prototype, "segmentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => segment_model_1.Segment),
    __metadata("design:type", segment_model_1.Segment)
], AdvancedFeature.prototype, "segment", void 0);
AdvancedFeature = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'advanced_features' })
], AdvancedFeature);
exports.AdvancedFeature = AdvancedFeature;
//# sourceMappingURL=advanced-features.model.js.map