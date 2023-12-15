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
exports.Chain = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Chain = class Chain extends sequelize_typescript_1.Model {
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
], Chain.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1000',
        description: 'game identifier. id 1000 - standart game, 1001 - advanced game 1002 - simple game',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Chain.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Wildberries', description: 'name of chain' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Chain.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'online',
        description: 'type of chain: online or brick&mortar',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM, values: ['online', 'brick&mortar'] }),
    __metadata("design:type", String)
], Chain.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '15', description: 'number of chain stores' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Chain.prototype, "stores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '456',
        description: 'peak market coverage of the chain',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Chain.prototype, "peak_market_coverage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234.6', description: 'fee to entry to chain' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Chain.prototype, "entry_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '534.5', description: 'chain annual fee' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Chain.prototype, "annual_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '150',
        description: 'max preferable price for the chain',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Chain.prototype, "max_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '45',
        description: 'min preferable price for the chain',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Chain.prototype, "min_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'number of trademarks' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Chain.prototype, "num_trademarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '15.5', description: 'target retail margin' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL }),
    __metadata("design:type", Number)
], Chain.prototype, "retail_margin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'classic',
        description: 'main design of chain',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['classic', 'business', 'casual', 'innovative', 'art'],
    }),
    __metadata("design:type", String)
], Chain.prototype, "design_main", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'art',
        description: 'second chain design',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['classic', 'business', 'casual', 'innovative', 'art'],
    }),
    __metadata("design:type", String)
], Chain.prototype, "design_second", void 0);
Chain = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'independent_chains' })
], Chain);
exports.Chain = Chain;
//# sourceMappingURL=chain.model.js.map