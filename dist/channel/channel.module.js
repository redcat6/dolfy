"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModule = void 0;
const common_1 = require("@nestjs/common");
const channel_controller_1 = require("./channel.controller");
const channel_service_1 = require("./channel.service");
const sequelize_1 = require("@nestjs/sequelize");
const channel_model_1 = require("./channel.model");
const jwt_1 = require("@nestjs/jwt");
const trademark_model_1 = require("../trademark/trademark.model");
const channel_trademark_model_1 = require("./channel-trademark.model");
const trademark_module_1 = require("../trademark/trademark.module");
const product_module_1 = require("../product/product.module");
const chain_module_1 = require("../chain/chain.module");
let ChannelModule = class ChannelModule {
};
ChannelModule = __decorate([
    (0, common_1.Module)({
        controllers: [channel_controller_1.ChannelController],
        providers: [channel_service_1.ChannelService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([channel_model_1.Channel, trademark_model_1.Trademark, channel_trademark_model_1.ChannelTrademark]),
            jwt_1.JwtModule,
            trademark_module_1.TrademarkModule,
            product_module_1.ProductModule,
            chain_module_1.ChainModule,
        ],
        exports: [channel_service_1.ChannelService],
    })
], ChannelModule);
exports.ChannelModule = ChannelModule;
//# sourceMappingURL=channel.module.js.map