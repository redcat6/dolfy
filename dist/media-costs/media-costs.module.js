"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaCostsModule = void 0;
const common_1 = require("@nestjs/common");
const media_costs_controller_1 = require("./media-costs.controller");
const media_costs_service_1 = require("./media-costs.service");
const sequelize_1 = require("@nestjs/sequelize");
const media_costs_model_1 = require("./media-costs.model");
const jwt_1 = require("@nestjs/jwt");
let MediaCostsModule = class MediaCostsModule {
};
MediaCostsModule = __decorate([
    (0, common_1.Module)({
        controllers: [media_costs_controller_1.MediaCostsController],
        providers: [media_costs_service_1.MediaCostsService],
        imports: [sequelize_1.SequelizeModule.forFeature([media_costs_model_1.MediaCosts]), jwt_1.JwtModule],
        exports: [media_costs_service_1.MediaCostsService],
    })
], MediaCostsModule);
exports.MediaCostsModule = MediaCostsModule;
//# sourceMappingURL=media-costs.module.js.map