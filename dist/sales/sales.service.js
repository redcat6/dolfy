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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sales_model_1 = require("./sales.model");
const month_sales_service_1 = require("../month-sales/month-sales.service");
const product_service_1 = require("../product/product.service");
const channel_service_1 = require("../channel/channel.service");
const common_functions_1 = require("../functions/common.functions");
const promotion_service_1 = require("../promotion/promotion.service");
let SalesService = class SalesService {
    constructor(salesRepository, monthSalesService, productService, promotionService, channelService) {
        this.salesRepository = salesRepository;
        this.monthSalesService = monthSalesService;
        this.productService = productService;
        this.promotionService = promotionService;
        this.channelService = channelService;
    }
    async createSales(dto) {
        const sales = await this.salesRepository.create(dto);
        return sales;
    }
    async getAllSales() {
        const sales = await this.salesRepository.findAll({
            include: { all: true },
        });
        return sales;
    }
    async getSalesByGame(gameId, round) {
        const sales = await this.salesRepository.findAll({
            where: { gameId, round },
            order: ['teamId', 'trademarkId'],
            include: { all: true },
        });
        return sales;
    }
    async getTeamSales(gameId, round, teamId) {
        const sales = await this.salesRepository.findAll({
            where: { gameId, round, teamId },
            order: ['trademarkId'],
            include: { all: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return sales;
    }
    async getSalesById(id) {
        const sales = await this.salesRepository.findByPk(id);
        return sales;
    }
    async updateSales(id, sales) {
        try {
            const num = await this.salesRepository.update(sales, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        const num = await this.salesRepository.destroy({ where: { id } });
        return num;
    }
    async calculateSales(gameId, round) {
        const monthSales = await this.monthSalesService.getMonthSalesByGame(gameId, round);
        if (monthSales.length < 1) {
            throw new common_1.HttpException(`there are no month sales by game ${gameId} round ${round}`, common_1.HttpStatus.NOT_FOUND);
        }
        const products = await this.productService.getProductsByGame(gameId, round);
        const channels = await this.channelService.getChannelsByGame(gameId, round);
        const promotions = await this.promotionService.getPromotionsByGame(gameId, round);
        let last_sales = [];
        if (round > 0) {
            last_sales = await this.getSalesByGame(gameId, round - 1);
        }
        products.forEach(async (product) => {
            const matched_prod = monthSales.filter((item) => item.productId === product.productId);
            const sales = matched_prod.reduce((sum, item) => {
                return (sum += item.sales_normalized);
            }, 0);
            const prod_channels = [];
            channels.forEach((chan) => {
                chan.trademarks.forEach((tr) => {
                    if (tr.id === product.trademarkId) {
                        prod_channels.push(chan);
                    }
                });
            });
            const sum_coverage = prod_channels.reduce((sum, item) => {
                return (sum += item.peak_market_coverage * item.stores);
            }, 0);
            const product_channels = [];
            const channels_sales = [];
            const channels_sales_cash = [];
            const channels_promotion = [];
            const channel_names = [];
            prod_channels.map((chan) => {
                const sales_units = (0, common_functions_1.roundNumber)(sales * ((chan.peak_market_coverage * chan.stores) / sum_coverage));
                product_channels.push(chan);
                channels_sales.push(sales_units);
            });
            const prod_promotion = promotions.find((item) => item.trademarkId === product.trademarkId);
            for (let i = 0; i < product_channels.length; i++) {
                let promotion = 0;
                if (prod_channels[i].type < 7) {
                    if (prod_promotion) {
                        const cashback = product.retail_price * prod_promotion.cashback;
                        promotion = prod_promotion.gift_cost + cashback;
                    }
                    channels_sales_cash[i] =
                        channels_sales[i] * (product.retail_price - promotion);
                }
                else {
                    channels_sales_cash[i] = channels_sales[i] * product.price;
                }
                channels_promotion[i] = promotion;
                channel_names[i] = product_channels[i].name;
            }
            const sales_cash = channels_sales_cash.reduce((sum, item) => {
                return (sum += item);
            }, 0);
            let inventories_beginning = 0;
            if (round > 0) {
                const last_prod = last_sales.find((item) => item.productId === product.productId);
                if (last_prod) {
                    inventories_beginning = last_prod.inventories_end;
                }
            }
            const inventories_end = product.production_plan + inventories_beginning - sales;
            const dto = {
                gameId: gameId,
                round: round,
                teamId: product.teamId,
                trademarkId: product.trademarkId,
                productId: product.productId,
                model: product.model,
                production_plan: product.production_plan,
                sales_units: sales,
                sales: sales_cash,
                inventories_beginning: inventories_beginning,
                inventories_end: inventories_end,
                channels: channel_names,
                channels_sales: channels_sales,
                channels_sales_cash: channels_sales_cash,
                channels_promotion: channels_promotion,
            };
            await this.createSales(dto);
        });
        this.channelSales(gameId, round);
    }
    async channelSales(gameId, round) {
        const sales = await this.salesRepository.findAll({
            where: { gameId, round },
            order: ['trademarkId'],
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        const channels = await this.channelService.getChannelsByGame(gameId, round);
        if ((channels === null || channels === void 0 ? void 0 : channels.length) > 0) {
            channels.forEach((channel) => {
                let channel_sales = 0;
                sales.forEach((item) => {
                    for (let i = 0; i < item.channels.length; i++) {
                        if (item.channels[i] == channel.name) {
                            channel_sales += item.channels_sales[i];
                        }
                    }
                });
                channel.sales_last = channel_sales;
                channel.save();
            });
        }
    }
};
SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(sales_model_1.Sales)),
    __metadata("design:paramtypes", [Object, month_sales_service_1.MonthSalesService,
        product_service_1.ProductService,
        promotion_service_1.PromotionService,
        channel_service_1.ChannelService])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map