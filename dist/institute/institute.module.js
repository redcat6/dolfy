"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteModule = void 0;
const common_1 = require("@nestjs/common");
const institute_controller_1 = require("./institute.controller");
const institute_service_1 = require("./institute.service");
const institute_model_1 = require("./institute.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const promo_model_1 = require("../promo/promo.model");
let InstituteModule = class InstituteModule {
};
InstituteModule = __decorate([
    (0, common_1.Module)({
        controllers: [institute_controller_1.InstituteController],
        providers: [institute_service_1.InstituteService],
        imports: [sequelize_1.SequelizeModule.forFeature([institute_model_1.Institute, promo_model_1.Promo]), jwt_1.JwtModule],
        exports: [institute_service_1.InstituteService],
    })
], InstituteModule);
exports.InstituteModule = InstituteModule;
//# sourceMappingURL=institute.module.js.map