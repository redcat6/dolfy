"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const product_model_1 = require("./product.model");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const team_model_1 = require("../team/team.model");
const trademark_model_1 = require("../trademark/trademark.model");
const trademark_module_1 = require("../trademark/trademark.module");
const market_segment_model_1 = require("../market-segment/market-segment.model");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([product_model_1.Product, team_model_1.Team, trademark_model_1.Trademark, market_segment_model_1.MarketSegment]),
            jwt_1.JwtModule,
            trademark_module_1.TrademarkModule,
        ],
        exports: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map