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
exports.InstituteController = void 0;
const common_1 = require("@nestjs/common");
const institute_service_1 = require("./institute.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const create_institute_dto_1 = require("./dto/create-institute.dto");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
let InstituteController = class InstituteController {
    constructor(instituteService) {
        this.instituteService = instituteService;
    }
    createInstitute(dto) {
        return this.instituteService.create(dto);
    }
    getByValue(name) {
        return this.instituteService.getByValue(name);
    }
    getAllInstitute() {
        return this.instituteService.getAll();
    }
    removeById(id) {
        return this.instituteService.removeById(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_institute_dto_1.CreateInstituteDto]),
    __metadata("design:returntype", Promise)
], InstituteController.prototype, "createInstitute", null);
__decorate([
    (0, common_1.Get)('/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstituteController.prototype, "getByValue", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstituteController.prototype, "getAllInstitute", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstituteController.prototype, "removeById", null);
InstituteController = __decorate([
    (0, common_1.Controller)('institute'),
    __metadata("design:paramtypes", [institute_service_1.InstituteService])
], InstituteController);
exports.InstituteController = InstituteController;
//# sourceMappingURL=institute.controller.js.map