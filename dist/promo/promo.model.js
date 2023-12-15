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
exports.Promo = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const institute_model_1 = require("../institute/institute.model");
let Promo = class Promo extends sequelize_typescript_1.Model {
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
], Promo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'riyuVV76Ngfd45', description: 'promo for usage' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true }),
    __metadata("design:type", String)
], Promo.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ion Lupan', description: 'professor name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: 'professor' }),
    __metadata("design:type", String)
], Promo.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', description: 'status of promo' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: 'Not used' }),
    __metadata("design:type", String)
], Promo.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'institute id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => institute_model_1.Institute),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Promo.prototype, "instituteId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => institute_model_1.Institute),
    __metadata("design:type", institute_model_1.Institute)
], Promo.prototype, "institute", void 0);
Promo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'codes' })
], Promo);
exports.Promo = Promo;
//# sourceMappingURL=promo.model.js.map