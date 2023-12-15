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
exports.MediaCoverage = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const segment_model_1 = require("../segment/segment.model");
let MediaCoverage = class MediaCoverage extends sequelize_typescript_1.Model {
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
], MediaCoverage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'game id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => game_model_1.Game),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.003', description: 'smm impression cost' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "smm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.002', description: 'content ads impression cost' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "content_ads", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.05',
        description: 'bloggers&influencers impression cost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "bloggers_influencers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.4', description: 'postal mail cost' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "postal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '90000',
        description: 'outdoor advertising campain cost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "outdoor_advertising", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '40000',
        description: 'autoradio podcasts campain cost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "autoradio_podcasts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '170000',
        description: 'tv campain cost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "tv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '14',
        description: 'segment identifier',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => segment_model_1.Segment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MediaCoverage.prototype, "segmentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => segment_model_1.Segment),
    __metadata("design:type", segment_model_1.Segment)
], MediaCoverage.prototype, "segment", void 0);
MediaCoverage = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'media_coverage' })
], MediaCoverage);
exports.MediaCoverage = MediaCoverage;
//# sourceMappingURL=media-coverage.model.js.map