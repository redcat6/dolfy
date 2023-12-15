"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancesModule = void 0;
const common_1 = require("@nestjs/common");
const finances_controller_1 = require("./finances.controller");
const finances_service_1 = require("./finances.service");
const finances_model_1 = require("./finances.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const product_module_1 = require("../product/product.module");
const sales_module_1 = require("../sales/sales.module");
const promotion_module_1 = require("../promotion/promotion.module");
const resource_module_1 = require("../resource/resource.module");
const intermediary_module_1 = require("../intermediary/intermediary.module");
let FinancesModule = class FinancesModule {
};
FinancesModule = __decorate([
    (0, common_1.Module)({
        controllers: [finances_controller_1.FinancesController],
        providers: [finances_service_1.FinancesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([finances_model_1.Finances]),
            jwt_1.JwtModule,
            product_module_1.ProductModule,
            sales_module_1.SalesModule,
            promotion_module_1.PromotionModule,
            resource_module_1.ResourceModule,
            intermediary_module_1.IntermediaryModule,
        ],
        exports: [finances_service_1.FinancesService],
    })
], FinancesModule);
exports.FinancesModule = FinancesModule;
//# sourceMappingURL=finances.module.js.map