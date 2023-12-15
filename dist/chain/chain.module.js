"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainModule = void 0;
const common_1 = require("@nestjs/common");
const chain_controller_1 = require("./chain.controller");
const chain_service_1 = require("./chain.service");
const sequelize_1 = require("@nestjs/sequelize");
const chain_model_1 = require("./chain.model");
const jwt_1 = require("@nestjs/jwt");
const market_segment_model_1 = require("../market-segment/market-segment.model");
let ChainModule = class ChainModule {
};
ChainModule = __decorate([
    (0, common_1.Module)({
        controllers: [chain_controller_1.ChainController],
        providers: [chain_service_1.ChainService],
        imports: [sequelize_1.SequelizeModule.forFeature([chain_model_1.Chain, market_segment_model_1.MarketSegment]), jwt_1.JwtModule],
        exports: [chain_service_1.ChainService],
    })
], ChainModule);
exports.ChainModule = ChainModule;
//# sourceMappingURL=chain.module.js.map