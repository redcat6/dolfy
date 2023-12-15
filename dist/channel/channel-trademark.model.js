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
exports.ChannelTrademark = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const trademark_model_1 = require("../trademark/trademark.model");
const channel_model_1 = require("./channel.model");
let ChannelTrademark = class ChannelTrademark extends sequelize_typescript_1.Model {
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
], ChannelTrademark.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'trademark identifier',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => trademark_model_1.Trademark),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ChannelTrademark.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'channel identifier',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => channel_model_1.Channel),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ChannelTrademark.prototype, "channelId", void 0);
ChannelTrademark = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'channel_trademarks' })
], ChannelTrademark);
exports.ChannelTrademark = ChannelTrademark;
//# sourceMappingURL=channel-trademark.model.js.map