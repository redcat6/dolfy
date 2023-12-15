"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyModule = void 0;
const common_1 = require("@nestjs/common");
const loyalty_controller_1 = require("./loyalty.controller");
const loyalty_service_1 = require("./loyalty.service");
const segment_model_1 = require("../segment/segment.model");
const loyalty_model_1 = require("./loyalty.model");
const trademark_model_1 = require("../trademark/trademark.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const market_segment_module_1 = require("../market-segment/market-segment.module");
const spot_module_1 = require("../spot/spot.module");
const product_module_1 = require("../product/product.module");
const advanced_features_module_1 = require("../advanced-features/advanced-features.module");
let LoyaltyModule = class LoyaltyModule {
};
LoyaltyModule = __decorate([
    (0, common_1.Module)({
        controllers: [loyalty_controller_1.LoyaltyController],
        providers: [loyalty_service_1.LoyaltyService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([loyalty_model_1.Loyalty, trademark_model_1.Trademark, segment_model_1.Segment]),
            jwt_1.JwtModule,
            product_module_1.ProductModule,
            market_segment_module_1.MarketSegmentModule,
            spot_module_1.SpotModule,
            advanced_features_module_1.AdvancedFeaturesModule,
        ],
        exports: [loyalty_service_1.LoyaltyService],
    })
], LoyaltyModule);
exports.LoyaltyModule = LoyaltyModule;
//# sourceMappingURL=loyalty.module.js.map