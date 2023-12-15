"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthSalesModule = void 0;
const common_1 = require("@nestjs/common");
const month_sales_controller_1 = require("./month-sales.controller");
const month_sales_service_1 = require("./month-sales.service");
const month_sales_model_1 = require("./month-sales.model");
const trademark_model_1 = require("../trademark/trademark.model");
const segment_model_1 = require("../segment/segment.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const product_module_1 = require("../product/product.module");
const market_segment_module_1 = require("../market-segment/market-segment.module");
const spot_module_1 = require("../spot/spot.module");
const advanced_features_module_1 = require("../advanced-features/advanced-features.module");
const channel_module_1 = require("../channel/channel.module");
const awareness_module_1 = require("../awareness/awareness.module");
const loyalty_module_1 = require("../loyalty/loyalty.module");
const promotion_module_1 = require("../promotion/promotion.module");
let MonthSalesModule = class MonthSalesModule {
};
MonthSalesModule = __decorate([
    (0, common_1.Module)({
        controllers: [month_sales_controller_1.MonthSalesController],
        providers: [month_sales_service_1.MonthSalesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([month_sales_model_1.MonthSales, trademark_model_1.Trademark, segment_model_1.Segment]),
            jwt_1.JwtModule,
            product_module_1.ProductModule,
            market_segment_module_1.MarketSegmentModule,
            spot_module_1.SpotModule,
            channel_module_1.ChannelModule,
            advanced_features_module_1.AdvancedFeaturesModule,
            awareness_module_1.AwarenessModule,
            loyalty_module_1.LoyaltyModule,
            promotion_module_1.PromotionModule,
        ],
        exports: [month_sales_service_1.MonthSalesService],
    })
], MonthSalesModule);
exports.MonthSalesModule = MonthSalesModule;
//# sourceMappingURL=month-sales.module.js.map