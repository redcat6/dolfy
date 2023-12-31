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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const roles_auth_decorator_1 = require("./roles-auth.decorator");
let RolesGuard = class RolesGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const requiredRoles = this.reflector.getAllAndOverride(roles_auth_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
            if (!requiredRoles) {
                return true;
            }
            const header = req.headers.authorization;
            const bearer = header.split(' ')[0];
            const token = header.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException({ message: 'User is unauthorized!' });
            }
            const user = this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            });
            if (!user) {
                throw new common_1.UnauthorizedException({ message: 'User is unauthorized!' });
            }
            req.user = user;
            return requiredRoles.some((role) => { var _a; return (_a = user.role) === null || _a === void 0 ? void 0 : _a.includes(role); });
        }
        catch (e) {
            throw new common_1.HttpException('An access is forbidden 2', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map