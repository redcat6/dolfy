"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketSegmentModule = void 0;
const common_1 = require("@nestjs/common");
const market_segment_controller_1 = require("./market-segment.controller");
const market_segment_service_1 = require("./market-segment.service");
const market_segment_model_1 = require("./market-segment.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const segment_model_1 = require("../segment/segment.model");
const chain_module_1 = require("../chain/chain.module");
const channel_module_1 = require("../channel/channel.module");
const product_module_1 = require("../product/product.module");
const spot_module_1 = require("../spot/spot.module");
let MarketSegmentModule = class MarketSegmentModule {
};
MarketSegmentModule = __decorate([
    (0, common_1.Module)({
        controllers: [market_segment_controller_1.MarketSegmentController],
        providers: [market_segment_service_1.MarketSegmentService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([market_segment_model_1.MarketSegment, segment_model_1.Segment]),
            jwt_1.JwtModule,
            chain_module_1.ChainModule,
            channel_module_1.ChannelModule,
            product_module_1.ProductModule,
            spot_module_1.SpotModule,
        ],
        exports: [market_segment_service_1.MarketSegmentService],
    })
], MarketSegmentModule);
exports.MarketSegmentModule = MarketSegmentModule;
//# sourceMappingURL=market-segment.module.js.map