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
exports.SegmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_segment_dto_1 = require("../segment/dto/create-segment.dto");
const segment_model_1 = require("../segment/segment.model");
const segment_service_1 = require("./segment.service");
let SegmentController = class SegmentController {
    constructor(segmentService) {
        this.segmentService = segmentService;
    }
    createSegment(dto) {
        return this.segmentService.createSegment(dto);
    }
    getSegments() {
        return this.segmentService.getAll();
    }
    getSegmentsbyCategory(category) {
        return this.segmentService.getByCategory(category);
    }
    updateSegment(segment, id) {
        return this.segmentService.updateSegment(id, segment);
    }
    deleteSegment(id) {
        return this.segmentService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'a new segment creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_segment_dto_1.CreateSegmentDto]),
    __metadata("design:returntype", Promise)
], SegmentController.prototype, "createSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all segments' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [segment_model_1.Segment] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SegmentController.prototype, "getSegments", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all segments by category' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [segment_model_1.Segment] }),
    (0, common_1.Get)('/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SegmentController.prototype, "getSegmentsbyCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'edit segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_segment_dto_1.CreateSegmentDto, Number]),
    __metadata("design:returntype", void 0)
], SegmentController.prototype, "updateSegment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete segment by id' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SegmentController.prototype, "deleteSegment", null);
SegmentController = __decorate([
    (0, swagger_1.ApiTags)('Segment'),
    (0, common_1.Controller)('segment'),
    __metadata("design:paramtypes", [segment_service_1.SegmentService])
], SegmentController);
exports.SegmentController = SegmentController;
//# sourceMappingURL=segment.controller.js.map