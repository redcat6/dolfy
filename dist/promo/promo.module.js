"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const promo_controller_1 = require("./promo.controller");
const promo_model_1 = require("./promo.model");
const promo_service_1 = require("./promo.service");
const jwt_1 = require("@nestjs/jwt");
const institute_model_1 = require("../institute/institute.model");
const users_module_1 = require("../users/users.module");
const institute_module_1 = require("../institute/institute.module");
let PromoModule = class PromoModule {
};
PromoModule = __decorate([
    (0, common_1.Module)({
        providers: [promo_service_1.PromoService],
        controllers: [promo_controller_1.PromoController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([promo_model_1.Promo, institute_model_1.Institute]),
            jwt_1.JwtModule,
            users_module_1.UsersModule,
            institute_module_1.InstituteModule,
        ],
        exports: [promo_service_1.PromoService],
    })
], PromoModule);
exports.PromoModule = PromoModule;
//# sourceMappingURL=promo.module.js.map