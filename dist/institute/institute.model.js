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
exports.Institute = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const promo_model_1 = require("../promo/promo.model");
let Institute = class Institute extends sequelize_typescript_1.Model {
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
], Institute.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Russia', description: 'country' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Institute.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Moskow', description: 'city' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Institute.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ULIM', description: 'name of institute' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Institute.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Economic', description: 'faculty of institute' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, defaultValue: '' }),
    __metadata("design:type", String)
], Institute.prototype, "faculty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '125/05-02-2022',
        description: 'number of the contract',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Institute.prototype, "contract", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '152', description: 'price' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.REAL, defaultValue: 0 }),
    __metadata("design:type", Number)
], Institute.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2.10.2022', description: 'date of expiration' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false }),
    __metadata("design:type", Date)
], Institute.prototype, "date_expired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'something about the contract',
        description: 'comments',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: '' }),
    __metadata("design:type", String)
], Institute.prototype, "comments", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => promo_model_1.Promo),
    __metadata("design:type", Array)
], Institute.prototype, "codes", void 0);
Institute = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'institutes' })
], Institute);
exports.Institute = Institute;
//# sourceMappingURL=institute.model.js.map