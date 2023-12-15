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
exports.TrademarkController = void 0;
const common_1 = require("@nestjs/common");
const trademark_service_1 = require("./trademark.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_trademark_dto_1 = require("./dto/create-trademark.dto");
const trademark_model_1 = require("./trademark.model");
let TrademarkController = class TrademarkController {
    constructor(trademarkService) {
        this.trademarkService = trademarkService;
    }
    createTrademark(dto) {
        return this.trademarkService.createTrademark(dto);
    }
    getSegments() {
        return this.trademarkService.getAll();
    }
    updateSegment(trademark, id) {
        return this.trademarkService.updateTrademark(trademark, id);
    }
    deleteSegment(id) {
        return this.trademarkService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new trademark creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trademark_dto_1.CreateTrademarkDto]),
    __metadata("design:returntype", Promise)
], TrademarkController.prototype, "createTrademark", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all trademarks' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [trademark_model_1.Trademark] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrademarkController.prototype, "getSegments", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'edit segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trademark_dto_1.CreateTrademarkDto, Number]),
    __metadata("design:returntype", void 0)
], TrademarkController.prototype, "updateSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete trademark by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrademarkController.prototype, "deleteSegment", null);
TrademarkController = __decorate([
    (0, common_1.Controller)('trademark'),
    __metadata("design:paramtypes", [trademark_service_1.TrademarkService])
], TrademarkController);
exports.TrademarkController = TrademarkController;
//# sourceMappingURL=trademark.controller.js.map