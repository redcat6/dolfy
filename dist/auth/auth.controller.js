"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const login_user_dto_1 = require("../users/dto/login-user.dto");
const auth_service_1 = require("./auth.service");
const users_model_1 = require("../users/users.model");
const roles_auth_decorator_1 = require("./roles-auth.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(userDto, res) {
        const data = await this.authService.login(userDto);
        const refreshToken = data.refreshToken;
        const age = Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
        res.cookie('jwt', refreshToken, {
            maxAge: age,
            httpOnly: true,
            secure: false,
        });
        return data;
    }
    async registration(userDto, res) {
        try {
            const data = await this.authService.registration(userDto);
            const refreshToken = data.refreshToken;
            const age = Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
            res.cookie('jwt', refreshToken, {
                maxAge: age,
                httpOnly: true,
                secure: false,
            });
            return data;
        }
        catch (err) {
            throw new common_1.HttpException(`Auth error: ${err.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createUser(userDto) {
        try {
            const data = await this.authService.registration(userDto);
            return data;
        }
        catch (err) {
            throw new common_1.HttpException(`Auth error: ${err.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async logout(req, res) {
        try {
            const refreshToken = req.cookies['jwt'];
            await this.authService.logout(refreshToken);
            res.clearCookie('jwt', {
                domain: process.env.FRONTEND_DOMAIN,
                path: '/',
            });
            return 'user logout';
        }
        catch (error) {
            throw new common_1.HttpException('Authentication error', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('auth/logup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create user (team) by professor' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, roles_auth_decorator_1.Roles)('PROFESSOR'),
    (0, common_1.Post)('auth/createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('auth/logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authorization'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map