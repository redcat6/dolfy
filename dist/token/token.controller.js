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
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("./token.service");
let TokenController = class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    async refreshToken(req, res) {
        try {
            const refresh = req.cookies['jwt'];
            if (!refresh) {
                throw new common_1.HttpException('User is not authorized!', common_1.HttpStatus.UNAUTHORIZED);
            }
            const data = await this.tokenService.refreshToken(refresh);
            const age = Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 60 * 1000;
            res.cookie('jwt', data.refreshToken, {
                maxAge: age,
                httpOnly: true,
                secure: false,
            });
            return data;
        }
        catch (error) {
            throw new common_1.UnauthorizedException({ message: 'User is unauthorized!' });
        }
    }
};
__decorate([
    (0, common_1.Get)('/refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "refreshToken", null);
TokenController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map