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
exports.ChainService = void 0;
const common_1 = require("@nestjs/common");
const chain_model_1 = require("./chain.model");
const sequelize_1 = require("@nestjs/sequelize");
let ChainService = class ChainService {
    constructor(chainRepository) {
        this.chainRepository = chainRepository;
    }
    async createChain(dto) {
        const chain = await this.chainRepository.create(dto);
        return chain;
    }
    async getAll() {
        const all = await this.chainRepository.findAll();
        return all;
    }
    async getByName(gameId, name) {
        const chain = await this.chainRepository.findOne({
            where: { gameId, name },
        });
        return chain;
    }
    async getByGame(gameId) {
        const chains = await this.chainRepository.findAll({
            where: { gameId },
            include: { all: true },
        });
        return chains;
    }
    async getById(id) {
        const chain = await this.chainRepository.findOne({
            where: { id },
        });
        return chain;
    }
    async updateChain(id, chain) {
        try {
            const num = await this.chainRepository.update(chain, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        const num = await this.chainRepository.destroy({ where: { id } });
        return num;
    }
};
ChainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(chain_model_1.Chain)),
    __metadata("design:paramtypes", [Object])
], ChainService);
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service.js.map