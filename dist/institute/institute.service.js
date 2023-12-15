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
exports.InstituteService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const institute_model_1 = require("./institute.model");
let InstituteService = class InstituteService {
    constructor(instituteRepository) {
        this.instituteRepository = instituteRepository;
    }
    async create(dto) {
        const institute = await this.instituteRepository.create(dto);
        return institute;
    }
    async getAll() {
        const all = await this.instituteRepository.findAll({
            include: { all: true },
            order: ['country', 'city', 'name', 'contract'],
        });
        return all;
    }
    async getById(id) {
        const institute = await this.instituteRepository.findOne({
            where: { id },
        });
        return institute;
    }
    async removeById(id) {
        const num = await this.instituteRepository.destroy({ where: { id } });
        return num;
    }
    async getByValue(name) {
        const institute = await this.instituteRepository.findOne({
            where: { name },
        });
        return institute;
    }
};
InstituteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(institute_model_1.Institute)),
    __metadata("design:paramtypes", [Object])
], InstituteService);
exports.InstituteService = InstituteService;
//# sourceMappingURL=institute.service.js.map