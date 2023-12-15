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
exports.PromoService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const promo_model_1 = require("./promo.model");
const users_service_1 = require("../users/users.service");
let PromoService = class PromoService {
    constructor(promoRepository, userServise) {
        this.promoRepository = promoRepository;
        this.userServise = userServise;
    }
    async create(dto) {
        const promo = await this.promoRepository.create(dto);
        return promo;
    }
    async getAll() {
        const all = await this.promoRepository.findAll({
            include: { all: true },
            order: ['instituteId'],
        });
        return all;
    }
    async getById(id) {
        const promo = await this.promoRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return promo;
    }
    async removeById(id) {
        const num = await this.promoRepository.destroy({ where: { id } });
        return num;
    }
    async getByValue(dto) {
        const promo = await this.promoRepository.findOne({
            where: { code: dto.code },
        });
        const user = await this.userServise.getUserByEmail(dto.email);
        if (!promo || !user) {
            throw new common_1.HttpException(`user or promo-code not found`, common_1.HttpStatus.NOT_FOUND);
        }
        promo.status = 'active';
        await promo.save();
        user.role = 'PROFESSOR';
        user.promoId = promo.id;
        await user.save();
        return user;
    }
    createCode(num) {
        const dictionary = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHKLZXCVBNM';
        let res = '';
        for (let index = 0; index < num; index++) {
            res += dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }
        return res;
    }
};
PromoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(promo_model_1.Promo)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], PromoService);
exports.PromoService = PromoService;
//# sourceMappingURL=promo.service.js.map