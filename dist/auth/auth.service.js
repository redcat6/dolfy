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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.SALT = 10;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const payload = { id: user.id, role: user.role };
        const tokens = await this.tokenService.generateTokens(payload);
        const tokenDto = {
            userId: user.id,
            token: tokens.refreshToken,
        };
        await this.tokenService.saveToken(tokenDto);
        return Object.assign(Object.assign({}, tokens), { user: user });
    }
    async registration(userDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException(`user with email: ${userDto.email} exists already`, common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, this.SALT);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        const payload = { id: user.id, role: user.role };
        const tokens = await this.tokenService.generateTokens(payload);
        const tokenDto = {
            userId: user.id,
            token: tokens.refreshToken,
        };
        await this.tokenService.saveToken(tokenDto);
        return Object.assign(Object.assign({}, tokens), { user: user });
    }
    async logout(refreshToken) {
        return await this.tokenService.removeToken(refreshToken);
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({
                message: 'User not found. Sign up, please',
            });
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({ message: 'Incorrect email or password' });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map