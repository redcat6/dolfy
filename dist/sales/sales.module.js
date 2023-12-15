"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModule = void 0;
const common_1 = require("@nestjs/common");
const sales_controller_1 = require("./sales.controller");
const sales_service_1 = require("./sales.service");
const sequelize_1 = require("@nestjs/sequelize");
const sales_model_1 = require("./sales.model");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
const jwt_1 = require("@nestjs/jwt");
const month_sales_module_1 = require("../month-sales/month-sales.module");
const product_module_1 = require("../product/product.module");
const channel_module_1 = require("../channel/channel.module");
const promotion_module_1 = require("../promotion/promotion.module");
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    (0, common_1.Module)({
        controllers: [sales_controller_1.SalesController],
        providers: [sales_service_1.SalesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([sales_model_1.Sales, team_model_1.Team, trademark_model_1.Trademark]),
            jwt_1.JwtModule,
            channel_module_1.ChannelModule,
            product_module_1.ProductModule,
            promotion_module_1.PromotionModule,
            month_sales_module_1.MonthSalesModule,
        ],
        exports: [sales_service_1.SalesService],
    })
], SalesModule);
exports.SalesModule = SalesModule;
//# sourceMappingURL=sales.module.js.map