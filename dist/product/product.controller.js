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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const product_service_1 = require("./product.service");
const product_model_1 = require("./product.model");
const create_product_dto_1 = require("./dto/create-product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(product) {
        return this.productService.createProduct(product);
    }
    getByGameAndRound(game_id, round) {
        console.log('round: ', round);
        return this.productService.getProductsByGame(game_id, round);
    }
    productTransition(game_id, round) {
        console.log('round: ', round);
        return this.productService.transitionProduct(game_id, round);
    }
    getProductsByTeam(team_id, gameId, round) {
        return this.productService.getTeamProducts(gameId, round, team_id);
    }
    update(dto, id) {
        return this.productService.updateProduct(id, dto);
    }
    removeById(id) {
        return this.productService.removeById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'product creation' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all products by game and round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/game/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getByGameAndRound", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'transition products by game to next round',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/transition/:game_id?'),
    __param(0, (0, common_1.Param)('game_id')),
    __param(1, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "productTransition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "getting team's products by game id & round" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/team/:team_id?'),
    __param(0, (0, common_1.Param)('team_id')),
    __param(1, (0, common_1.Query)('gameId')),
    __param(2, (0, common_1.Query)('round')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update product' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete product by id' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.RESET_CONTENT),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removeById", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map