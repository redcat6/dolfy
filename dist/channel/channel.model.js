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
exports.Channel = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
const channel_trademark_model_1 = require("./channel-trademark.model");
let Channel = class Channel extends sequelize_typescript_1.Model {
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
], Channel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'game identifier',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], Channel.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true }),
    __metadata("design:type", Number)
], Channel.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'round of the channel creation',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Channel.prototype, "register_round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'team identifier',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Channel.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'type of the channel',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Channel.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'channel name',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Channel.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'number of channel stores in the current game & current round',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Channel.prototype, "stores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'game identifier',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Channel.prototype, "peak_market_coverage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'investments costs (only for self channels)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "investment_costs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'operational costs (only for self channels)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "operational_costs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'sales in units (last year)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "sales_last", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'franchise costs (only for franchise)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "franchise_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'franchise fee (only for franchise)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "franchise_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'entry fee (only for chains)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "entry_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'annual fee (only for chains)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "annual_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'number of trademarks (only for independent chains registered)',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Channel.prototype, "num_trademarks", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Channel.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => trademark_model_1.Trademark, () => channel_trademark_model_1.ChannelTrademark),
    __metadata("design:type", Array)
], Channel.prototype, "trademarks", void 0);
Channel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'channels' })
], Channel);
exports.Channel = Channel;
//# sourceMappingURL=channel.model.js.map