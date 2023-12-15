"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedFeaturesModule = void 0;
const common_1 = require("@nestjs/common");
const advanced_features_controller_1 = require("./advanced-features.controller");
const advanced_features_service_1 = require("./advanced-features.service");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const advanced_features_model_1 = require("./advanced-features.model");
const segment_model_1 = require("../segment/segment.model");
const product_module_1 = require("../product/product.module");
const market_segment_module_1 = require("../market-segment/market-segment.module");
const spot_module_1 = require("../spot/spot.module");
const channel_module_1 = require("../channel/channel.module");
let AdvancedFeaturesModule = class AdvancedFeaturesModule {
};
AdvancedFeaturesModule = __decorate([
    (0, common_1.Module)({
        controllers: [advanced_features_controller_1.AdvancedFeaturesController],
        providers: [advanced_features_service_1.AdvancedFeaturesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([advanced_features_model_1.AdvancedFeature, segment_model_1.Segment]),
            jwt_1.JwtModule,
            product_module_1.ProductModule,
            market_segment_module_1.MarketSegmentModule,
            spot_module_1.SpotModule,
            channel_module_1.ChannelModule,
        ],
        exports: [advanced_features_service_1.AdvancedFeaturesService],
    })
], AdvancedFeaturesModule);
exports.AdvancedFeaturesModule = AdvancedFeaturesModule;
//# sourceMappingURL=advanced-features.module.js.map