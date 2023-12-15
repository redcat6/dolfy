"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const users_model_1 = require("./users/users.model");
const game_model_1 = require("./game/game.model");
const team_model_1 = require("./team/team.model");
const market_segment_model_1 = require("./market-segment/market-segment.model");
const token_model_1 = require("./token/token.model");
const segment_model_1 = require("./segment/segment.model");
const promo_model_1 = require("./promo/promo.model");
const chain_model_1 = require("./chain/chain.model");
const product_model_1 = require("./product/product.model");
const advanced_features_model_1 = require("./advanced-features/advanced-features.model");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const game_module_1 = require("./game/game.module");
const team_module_1 = require("./team/team.module");
const segment_module_1 = require("./segment/segment.module");
const token_module_1 = require("./token/token.module");
const promo_module_1 = require("./promo/promo.module");
const chain_module_1 = require("./chain/chain.module");
const product_module_1 = require("./product/product.module");
const advanced_features_module_1 = require("./advanced-features/advanced-features.module");
const market_segment_module_1 = require("./market-segment/market-segment.module");
const trademark_module_1 = require("./trademark/trademark.module");
const trademark_model_1 = require("./trademark/trademark.model");
const channel_trademark_model_1 = require("./channel/channel-trademark.model");
const channel_model_1 = require("./channel/channel.model");
const channel_module_1 = require("./channel/channel.module");
const spot_module_1 = require("./spot/spot.module");
const spot_model_1 = require("./spot/spot.model");
const resource_module_1 = require("./resource/resource.module");
const resource_model_1 = require("./resource/resource.model");
const institute_module_1 = require("./institute/institute.module");
const institute_model_1 = require("./institute/institute.model");
const promotion_module_1 = require("./promotion/promotion.module");
const promotion_model_1 = require("./promotion/promotion.model");
const media_costs_module_1 = require("./media-costs/media-costs.module");
const media_coverage_module_1 = require("./media-coverage/media-coverage.module");
const media_costs_model_1 = require("./media-costs/media-costs.model");
const media_coverage_model_1 = require("./media-coverage/media-coverage.model");
const finances_module_1 = require("./finances/finances.module");
const intermediary_module_1 = require("./intermediary/intermediary.module");
const awareness_module_1 = require("./awareness/awareness.module");
const loyalty_module_1 = require("./loyalty/loyalty.module");
const month_sales_module_1 = require("./month-sales/month-sales.module");
const sales_module_1 = require("./sales/sales.module");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'build'),
            }),
            platform_express_1.MulterModule.register({
                dest: path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'img'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: 'postgres',
                password: 'root',
                database: 'simulator',
                models: [
                    users_model_1.User,
                    game_model_1.Game,
                    team_model_1.Team,
                    segment_model_1.Segment,
                    market_segment_model_1.MarketSegment,
                    token_model_1.Token,
                    promo_model_1.Promo,
                    chain_model_1.Chain,
                    product_model_1.Product,
                    advanced_features_model_1.AdvancedFeature,
                    trademark_model_1.Trademark,
                    channel_model_1.Channel,
                    channel_trademark_model_1.ChannelTrademark,
                    spot_model_1.Spot,
                    resource_model_1.Resource,
                    institute_model_1.Institute,
                    promotion_model_1.Promotion,
                    media_costs_model_1.MediaCosts,
                    media_coverage_model_1.MediaCoverage,
                ],
                autoLoadModels: true,
                synchronize: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            game_module_1.GameModule,
            team_module_1.TeamModule,
            segment_module_1.SegmentModule,
            token_module_1.TokenModule,
            promo_module_1.PromoModule,
            chain_module_1.ChainModule,
            product_module_1.ProductModule,
            advanced_features_module_1.AdvancedFeaturesModule,
            market_segment_module_1.MarketSegmentModule,
            trademark_module_1.TrademarkModule,
            channel_module_1.ChannelModule,
            spot_module_1.SpotModule,
            resource_module_1.ResourceModule,
            institute_module_1.InstituteModule,
            promotion_module_1.PromotionModule,
            media_costs_module_1.MediaCostsModule,
            media_coverage_module_1.MediaCoverageModule,
            finances_module_1.FinancesModule,
            intermediary_module_1.IntermediaryModule,
            awareness_module_1.AwarenessModule,
            loyalty_module_1.LoyaltyModule,
            month_sales_module_1.MonthSalesModule,
            sales_module_1.SalesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map