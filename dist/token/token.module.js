"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("./token.service");
const token_controller_1 = require("./token.controller");
const sequelize_1 = require("@nestjs/sequelize");
const token_model_1 = require("./token.model");
const users_model_1 = require("../users/users.model");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([token_model_1.Token, users_model_1.User]),
            jwt_1.JwtModule.register({}),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [token_service_1.TokenService, jwt_1.JwtModule],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map