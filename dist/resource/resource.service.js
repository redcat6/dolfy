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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const resource_model_1 = require("./resource.model");
const sequelize_1 = require("@nestjs/sequelize");
let ResourceService = class ResourceService {
    constructor(resourceRepository) {
        this.resourceRepository = resourceRepository;
    }
    async createResource(dto) {
        const resource = await this.resourceRepository.create(dto);
        return resource;
    }
    async getAllResources() {
        const resources = await this.resourceRepository.findAll({
            include: { all: true },
        });
        return resources;
    }
    async getResourcesByGame(gameId, round) {
        const resources = await this.resourceRepository.findAll({
            where: { gameId, round },
            order: ['teamId'],
            include: { all: true },
        });
        return resources;
    }
    async getTeamResources(gameId, round, teamId) {
        const resources = await this.resourceRepository.findAll({
            where: { gameId, round, teamId },
            include: { all: true },
        });
        return resources;
    }
    async getResourceById(id) {
        const resource = await this.resourceRepository.findByPk(id);
        return resource;
    }
    async updateResource(id, resource) {
        try {
            await this.resourceRepository.update(resource, {
                where: { id },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        try {
            const num = await this.resourceRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async transitionResources(gameId, round) {
        const resources = await this.resourceRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((resources === null || resources === void 0 ? void 0 : resources.length) > 0) {
            resources.forEach(async (item) => {
                const capacities = item.capacities + item.capacities_increase;
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    teamId: item.teamId,
                    capacities,
                    capacities_increase: 0,
                    long_term_debt: item.long_term_debt,
                    borrowings: 0,
                    research_segments: [],
                    research_costs: 0,
                };
                try {
                    await this.resourceRepository.create(dto);
                }
                catch (error) {
                    new common_1.HttpException(`can't create resource, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
    }
};
ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(resource_model_1.Resource)),
    __metadata("design:paramtypes", [Object])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map