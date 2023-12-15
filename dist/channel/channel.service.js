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
exports.ChannelService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const channel_model_1 = require("./channel.model");
const trademark_service_1 = require("../trademark/trademark.service");
const product_service_1 = require("../product/product.service");
const chain_service_1 = require("../chain/chain.service");
const brands_functions_1 = require("../functions/brands.functions");
let ChannelService = class ChannelService {
    constructor(channelRepository, trademarkService, productsService, chainService) {
        this.channelRepository = channelRepository;
        this.trademarkService = trademarkService;
        this.productsService = productsService;
        this.chainService = chainService;
    }
    async createChannel(dto) {
        const trs = [];
        dto.trademarks.forEach(async (tr) => {
            const res = await this.trademarkService.getByName(tr);
            if (res) {
                trs.push(res);
            }
        });
        const peak_market_coverage = this.getCoverage(dto.type);
        const forChan = Object.assign(Object.assign({}, dto), { peak_market_coverage: peak_market_coverage });
        const channel = await this.channelRepository.create(forChan);
        await channel.$set('trademarks', trs);
        return channel;
    }
    async getChannelsByGame(gameId, round) {
        const channels = await this.channelRepository.findAll({
            where: { gameId, round },
            order: ['teamId'],
            include: { all: true },
        });
        return channels;
    }
    async getTeamChannels(gameId, round, teamId) {
        const channels = await this.channelRepository.findAll({
            where: { gameId, round, teamId },
            include: { all: true },
        });
        return channels;
    }
    async getChannelById(id) {
        const res = await this.channelRepository.findByPk(id, {
            include: { all: true },
        });
        return res;
    }
    async updateChannel(id, channel) {
        try {
            const num = await this.channelRepository.update(channel, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeChannelById(id) {
        try {
            const num = await this.channelRepository.destroy({ where: { id } });
            return num;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async addTrademark(dto) {
        const channel = await this.channelRepository.findByPk(dto.channelId);
        const trademark = await this.trademarkService.getByName(dto.trademark);
        if (channel && trademark) {
            await channel.$add('trademarks', trademark);
        }
        else {
            throw new common_1.HttpException(`the channel with id: ${dto.channelId} or trademark ${dto.trademark}
         not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return channel;
    }
    async removeTrademark(channelId, brand) {
        const brand_decoded = decodeURIComponent(brand);
        const channel = await this.channelRepository.findByPk(channelId);
        const trademark = await this.trademarkService.getByName(brand_decoded);
        if (channel && trademark) {
            await channel.$remove('trademarks', trademark);
        }
        else {
            throw new common_1.HttpException(`the channel with id: ${channelId} or trademark ${brand}
         not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return channel;
    }
    getCoverage(type) {
        let coverage = 0;
        switch (type) {
            case 1:
                coverage = 60000;
                break;
            case 2:
                coverage = 20000;
                break;
            case 3:
                coverage = 20000;
                break;
            case 4:
                coverage = 20000;
                break;
            case 5:
                coverage = 20000;
                break;
            case 7:
                coverage = 120000;
                break;
            case 8:
                coverage = 40000;
                break;
        }
        return coverage;
    }
    async calculateIndependentChains(gameId, round) {
        const channels = await this.getChannelsByGame(gameId, round);
        const independents = channels.filter((chan) => chan.type === 8);
        if ((independents === null || independents === void 0 ? void 0 : independents.length) < 1) {
            return;
        }
        const products = await this.productsService.getProductsByGame(gameId, round);
        independents.forEach((item) => {
            var _a;
            item.trademarks.forEach(async (trademark) => {
                const chain = await this.chainService.getByName(gameId, trademark.name);
                const productsOfTrademark = products.filter((prod) => prod.trademarkId === trademark.id);
                if (productsOfTrademark.length > 0) {
                    const all_models = productsOfTrademark.length;
                    const num_price = (0, brands_functions_1.MatchByPrice)(chain, productsOfTrademark);
                    const num_design = (0, brands_functions_1.MatchByDesign)(chain, productsOfTrademark);
                    const num_margin = (0, brands_functions_1.MatchByMargin)(chain, productsOfTrademark);
                    const rate_price = num_price / all_models;
                    const rate_design = num_design / all_models;
                    const rate_margin = num_margin / all_models;
                    if (rate_price < 0.6 || rate_design < 0.6 || rate_margin < 0.6) {
                        console.log(`deleting the trademark ${trademark.name}`);
                        this.removeTrademark(item.id, trademark.name);
                    }
                }
            });
            if (((_a = item.trademarks) === null || _a === void 0 ? void 0 : _a.length) < 1) {
                item.stores = 0;
            }
        });
        return independents;
    }
    async calculateFranchiseStores(gameId, round) {
        const channels = await this.getChannelsByGame(gameId, round);
        const franchises = channels.filter((chan) => chan.type === 4);
        if ((franchises === null || franchises === void 0 ? void 0 : franchises.length) < 1) {
            return;
        }
        const self_channels = channels.filter((channel) => channel.type < 4);
        franchises.forEach((franchise) => {
            const matched_channels = [];
            self_channels.forEach((channel) => {
                channel.trademarks.forEach((trademark) => {
                    if (trademark.id === franchise.trademarks[0].id) {
                        const inArr = matched_channels.find((chan) => chan.id == channel.id);
                        if (!inArr) {
                            matched_channels.push(channel);
                        }
                    }
                });
            });
            const coverage = matched_channels.reduce((sum, item) => {
                return (sum += this.getCoverage(item.type) * item.stores);
            }, 0);
            const stores = Math.floor((coverage * 0.2) / 20000);
            const peak_market_coverage = this.getCoverage(franchise.type);
            franchise.stores = stores;
            franchise.peak_market_coverage = peak_market_coverage;
            franchise.save();
        });
        return channels;
    }
    async transitionChannel(gameId, round) {
        const channels = await this.channelRepository.findAll({
            where: { gameId, round },
            include: { all: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((channels === null || channels === void 0 ? void 0 : channels.length) > 0) {
            channels.forEach(async (item) => {
                if (item.stores > 0) {
                    const trademarks = item.trademarks.map((tr) => tr.name);
                    const stores = item.type == 4 ? 0 : item.stores;
                    const dto = {
                        gameId: Number(gameId),
                        round: Number(round + 1),
                        register_round: item.register_round,
                        teamId: item.teamId,
                        type: item.type,
                        name: item.name,
                        stores: stores,
                        trademarks: trademarks,
                        investment_costs: 0,
                        operational_costs: item.operational_costs,
                        sales_last: item.sales_last,
                        franchise_cost: item.franchise_cost,
                        franchise_fee: item.franchise_fee,
                    };
                    try {
                        await this.createChannel(dto);
                    }
                    catch (error) {
                        new common_1.HttpException(`can't create channel, error: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
                    }
                }
            });
        }
    }
};
ChannelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(channel_model_1.Channel)),
    __metadata("design:paramtypes", [Object, trademark_service_1.TrademarkService,
        product_service_1.ProductService,
        chain_service_1.ChainService])
], ChannelService);
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map