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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("./product.model");
const trademark_service_1 = require("../trademark/trademark.service");
let ProductService = class ProductService {
    constructor(productRepository, trademarkService) {
        this.productRepository = productRepository;
        this.trademarkService = trademarkService;
    }
    async createProduct(dto) {
        let trademark = await this.trademarkService.getByName(dto.trademark);
        if (!trademark) {
            trademark = await this.trademarkService.createTrademark({
                name: dto.trademark,
            });
        }
        const id = trademark.id;
        delete dto.trademark;
        const prod = Object.assign(Object.assign({}, dto), { trademarkId: id });
        const product = await this.productRepository.create(prod);
        return product;
    }
    async getAllProducts() {
        const products = await this.productRepository.findAll({
            include: { all: true },
        });
        return products;
    }
    async getProductsByGame(gameId, round) {
        const products = await this.productRepository.findAll({
            where: { gameId, round },
            order: ['teamId', 'trademarkId'],
            include: { all: true },
        });
        return products;
    }
    async getTeamProducts(gameId, round, teamId) {
        const products = await this.productRepository.findAll({
            where: { gameId, round, teamId },
            order: ['trademarkId'],
            include: { all: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return products;
    }
    async getProductById(id) {
        const product = await this.productRepository.findByPk(id);
        return product;
    }
    async updateProduct(id, product) {
        try {
            const num = await this.productRepository.update(product, {
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
            const num = await this.productRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async transitionProduct(gameId, round) {
        const products = await this.productRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((products === null || products === void 0 ? void 0 : products.length) > 0) {
            products.forEach(async (item) => {
                if (item.available_till == 12) {
                    const model = item.model.split('_')[0];
                    const dto = {
                        gameId: Number(gameId),
                        round: Number(round + 1),
                        productId: item.productId,
                        trademarkId: item.trademarkId,
                        model: model,
                        available_from: 1,
                        available_till: 12,
                        material: item.material,
                        manufacturing: item.manufacturing,
                        design_type: item.design_type,
                        design: item.design,
                        variations: item.variations,
                        advanced_feature: item.advanced_feature,
                        sales_plan: item.sales_plan,
                        production_plan: item.production_plan,
                        investments: 0,
                        unit_cost: item.unit_cost,
                        retail_price: item.retail_price,
                        price: item.price,
                        teamId: item.teamId,
                    };
                    try {
                        await this.productRepository.create(dto);
                    }
                    catch (error) {
                        new common_1.HttpException(`can't create product, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                    }
                }
            });
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object, trademark_service_1.TrademarkService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map