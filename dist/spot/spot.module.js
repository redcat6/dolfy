"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotModule = void 0;
const common_1 = require("@nestjs/common");
const spot_controller_1 = require("./spot.controller");
const spot_service_1 = require("./spot.service");
const sequelize_1 = require("@nestjs/sequelize");
const spot_model_1 = require("./spot.model");
const jwt_1 = require("@nestjs/jwt");
let SpotModule = class SpotModule {
};
SpotModule = __decorate([
    (0, common_1.Module)({
        controllers: [spot_controller_1.SpotController],
        providers: [spot_service_1.SpotService],
        imports: [sequelize_1.SequelizeModule.forFeature([spot_model_1.Spot]), jwt_1.JwtModule],
        exports: [spot_service_1.SpotService],
    })
], SpotModule);
exports.SpotModule = SpotModule;
//# sourceMappingURL=spot.module.js.map