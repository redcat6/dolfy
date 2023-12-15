"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntermediaryModule = void 0;
const common_1 = require("@nestjs/common");
const intermediary_controller_1 = require("./intermediary.controller");
const intermediary_service_1 = require("./intermediary.service");
const intermediary_model_1 = require("./intermediary.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const channel_module_1 = require("../channel/channel.module");
const product_module_1 = require("../product/product.module");
const sales_module_1 = require("../sales/sales.module");
const resource_module_1 = require("../resource/resource.module");
const spot_module_1 = require("../spot/spot.module");
let IntermediaryModule = class IntermediaryModule {
};
IntermediaryModule = __decorate([
    (0, common_1.Module)({
        controllers: [intermediary_controller_1.IntermediaryController],
        providers: [intermediary_service_1.IntermediaryService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([intermediary_model_1.Intermediary]),
            jwt_1.JwtModule,
            channel_module_1.ChannelModule,
            product_module_1.ProductModule,
            sales_module_1.SalesModule,
            resource_module_1.ResourceModule,
            spot_module_1.SpotModule,
        ],
        exports: [intermediary_service_1.IntermediaryService],
    })
], IntermediaryModule);
exports.IntermediaryModule = IntermediaryModule;
//# sourceMappingURL=intermediary.module.js.map