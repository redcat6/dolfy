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
exports.Trademark = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const channel_trademark_model_1 = require("../channel/channel-trademark.model");
const channel_model_1 = require("../channel/channel.model");
const product_model_1 = require("../product/product.model");
let Trademark = class Trademark extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'unique trademark identifier' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Trademark.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Baggy',
        description: 'name of trademark',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Trademark.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.Product),
    __metadata("design:type", Array)
], Trademark.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => channel_model_1.Channel, () => channel_trademark_model_1.ChannelTrademark),
    __metadata("design:type", Array)
], Trademark.prototype, "channels", void 0);
Trademark = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'trademarks' })
], Trademark);
exports.Trademark = Trademark;
//# sourceMappingURL=trademark.model.js.map