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
exports.Spot = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
let Spot = class Spot extends sequelize_typescript_1.Model {
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
], Spot.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25', description: 'game id' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Spot.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Spot.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'round of registration' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Spot.prototype, "register_round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'team id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Spot.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alpha bags spot',
        description: 'name of spot',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Spot.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'classic', description: 'date of expiration' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['', 'design', 'material', 'manufacturing'],
        defaultValue: '',
    }),
    __metadata("design:type", String)
], Spot.prototype, "core_message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'power bank', description: 'advanced feture' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: [
            '',
            'positioning tracker',
            'power bank',
            'missed items warning',
            'danger alarm',
            'fridge camera',
            'individual pictures',
            'against loss insurance',
            'environment friendly utilization',
            'charity profit sharing',
        ],
        defaultValue: '',
    }),
    __metadata("design:type", String)
], Spot.prototype, "advanced_feature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'attractive', description: 'promotion about price' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: '' }),
    __metadata("design:type", String)
], Spot.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fun', description: 'main value in promotion' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: [
            'family',
            'attractiveness',
            'personality',
            'social_status',
            'fun',
            'friendship',
            'pets',
            'independent',
        ],
    }),
    __metadata("design:type", String)
], Spot.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'create demand',
        description: 'objective of the promotiom',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: [
            'create demand',
            'stimulate purchase',
            'maintain loyalty',
            'introduce brand',
        ],
    }),
    __metadata("design:type", String)
], Spot.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: "level of spot's quality (between 1 and 5)",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Spot.prototype, "quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 7,
        description: 'id of the trademark',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Spot.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[Business, UltraFasion, School]',
        description: 'array of the segments names',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING) }),
    __metadata("design:type", Array)
], Spot.prototype, "segments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[TV, post mailing]',
        description: 'array of the ad channels',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING) }),
    __metadata("design:type", Array)
], Spot.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'investments to spot creation',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Spot.prototype, "investments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'spot operation costs',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Spot.prototype, "operations", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Spot.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], Spot.prototype, "trademark", void 0);
Spot = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'spots' })
], Spot);
exports.Spot = Spot;
//# sourceMappingURL=spot.model.js.map