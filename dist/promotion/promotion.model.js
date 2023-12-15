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
exports.Promotion = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
let Promotion = class Promotion extends sequelize_typescript_1.Model {
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
], Promotion.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'game id' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Promotion.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Promotion.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'team id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => team_model_1.Team),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Promotion.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alpha bags spot',
        description: 'name of spot',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Promotion.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.05', description: 'cash back, 5%' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Promotion.prototype, "cashback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 7,
        description: 'id of the trademark',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Promotion.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '35',
        description: 'gift cost',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Promotion.prototype, "gift_cost", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => team_model_1.Team),
    __metadata("design:type", team_model_1.Team)
], Promotion.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trademark_model_1.Trademark),
    __metadata("design:type", trademark_model_1.Trademark)
], Promotion.prototype, "trademark", void 0);
Promotion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'promotions' })
], Promotion);
exports.Promotion = Promotion;
//# sourceMappingURL=promotion.model.js.map