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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
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
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.com', description: 'user email' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sdkg8334kbo4st', description: 'user password' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ADMIN',
        description: 'user role: TEAM, ADMIN, PROFESSOR',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: 'TEAM',
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lupu Ion', description: 'name of user' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: '' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+373 60080045', description: 'phone of user' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: '' }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'false / true',
        description: 'activate user his account by activation link or not',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActivated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'id of the professor promocode',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null }),
    __metadata("design:type", Number)
], User.prototype, "promoId", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=users.model.js.map