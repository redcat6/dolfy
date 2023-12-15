"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrademarkModule = void 0;
const common_1 = require("@nestjs/common");
const trademark_controller_1 = require("./trademark.controller");
const trademark_service_1 = require("./trademark.service");
const sequelize_1 = require("@nestjs/sequelize");
const trademark_model_1 = require("./trademark.model");
const product_model_1 = require("../product/product.model");
const jwt_1 = require("@nestjs/jwt");
const channel_model_1 = require("../channel/channel.model");
const channel_trademark_model_1 = require("../channel/channel-trademark.model");
let TrademarkModule = class TrademarkModule {
};
TrademarkModule = __decorate([
    (0, common_1.Module)({
        controllers: [trademark_controller_1.TrademarkController],
        providers: [trademark_service_1.TrademarkService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([trademark_model_1.Trademark, product_model_1.Product, channel_model_1.Channel, channel_trademark_model_1.ChannelTrademark]),
            jwt_1.JwtModule,
        ],
        exports: [trademark_service_1.TrademarkService],
    })
], TrademarkModule);
exports.TrademarkModule = TrademarkModule;
//# sourceMappingURL=trademark.module.js.map