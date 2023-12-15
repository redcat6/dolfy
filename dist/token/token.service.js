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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const token_model_1 = require("./token.model");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let TokenService = class TokenService {
    constructor(tokenRepository, jwtService, userService) {
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async generateTokens(payload) {
        const accessTokenConfig = {
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME} m`,
        };
        const refreshTokenConfig = {
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
            expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME} m`,
        };
        const accessToken = this.jwtService.sign(payload, accessTokenConfig);
        const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);
        return {
            accessToken,
            refreshToken,
        };
    }
    async saveToken({ userId, token }) {
        const dataToken = await this.tokenRepository.findOne({
            where: { userId },
        });
        if (dataToken) {
            dataToken.token = token;
            return await dataToken.save();
        }
        const refreshToken = await this.tokenRepository.create({
            userId: userId,
            token: token,
        });
        return refreshToken;
    }
    async refreshToken(token) {
        const userData = this.validateRefreshToken(token);
        const data = await this.tokenRepository.findOne({
            where: { token: token },
        });
        if (!userData || !data) {
            throw new common_1.HttpException('User not authorized!', common_1.HttpStatus.UNAUTHORIZED);
        }
        const user = await this.userService.getUserById(data.userId);
        if (!user) {
            throw new common_1.HttpException('User not authorized!', common_1.HttpStatus.UNAUTHORIZED);
        }
        const tokens = this.generateTokens({ id: user.id, role: user.role });
        data.token = (await tokens).refreshToken;
        await data.save();
        return {
            accessToken: (await tokens).accessToken,
            refreshToken: (await tokens).refreshToken,
            user: user,
        };
    }
    async removeToken(refreshToken) {
        const token = await this.tokenRepository.findOne({
            where: { token: refreshToken },
        });
        if (token) {
            await token.destroy();
        }
        return token;
    }
    async validateAccessToken(token) {
        try {
            const userData = await this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            });
            return userData;
        }
        catch (error) {
            return null;
        }
    }
    async validateRefreshToken(token) {
        try {
            const userData = await this.jwtService.verify(token, {
                secret: process.env.JWT_REFRESH_TOKEN_SECRET,
            });
            return userData;
        }
        catch (error) {
            return null;
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(token_model_1.Token)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        users_service_1.UsersService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map