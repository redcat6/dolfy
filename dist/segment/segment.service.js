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
exports.SegmentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const segment_model_1 = require("./segment.model");
let SegmentService = class SegmentService {
    constructor(segmentRepository) {
        this.segmentRepository = segmentRepository;
    }
    async createSegment(dto) {
        const segment = await this.segmentRepository.create(dto);
        return segment;
    }
    async getAll() {
        const all = await this.segmentRepository.findAll();
        return all;
    }
    async getByCategory(category) {
        const all = await this.segmentRepository.findAll({
            where: { category },
        });
        return all;
    }
    async getById(id) {
        const segment = await this.segmentRepository.findOne({
            where: { id },
        });
        return segment;
    }
    async updateSegment(id, segment) {
        try {
            const num = await this.segmentRepository.update(segment, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        const num = await this.segmentRepository.destroy({ where: { id } });
        return num;
    }
};
SegmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(segment_model_1.Segment)),
    __metadata("design:paramtypes", [Object])
], SegmentService);
exports.SegmentService = SegmentService;
//# sourceMappingURL=segment.service.js.map