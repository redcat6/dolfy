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
exports.TrademarkService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const trademark_model_1 = require("./trademark.model");
let TrademarkService = class TrademarkService {
    constructor(trademarkRepository) {
        this.trademarkRepository = trademarkRepository;
    }
    async createTrademark(dto) {
        const trademark = await this.trademarkRepository.create(dto);
        return trademark;
    }
    async getAll() {
        const all = await this.trademarkRepository.findAll();
        return all;
    }
    async getById(id) {
        const trademark = await this.trademarkRepository.findOne({
            where: { id },
        });
        return trademark;
    }
    async getByName(name) {
        const trademark = await this.trademarkRepository.findOne({
            where: { name },
        });
        return trademark;
    }
    async updateTrademark(trademark, id) {
        try {
            const num = await this.trademarkRepository.update(trademark, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        try {
            const num = await this.trademarkRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
TrademarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(trademark_model_1.Trademark)),
    __metadata("design:paramtypes", [Object])
], TrademarkService);
exports.TrademarkService = TrademarkService;
//# sourceMappingURL=trademark.service.js.map