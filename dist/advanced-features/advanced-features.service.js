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
exports.AdvancedFeaturesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const advanced_features_model_1 = require("./advanced-features.model");
const product_service_1 = require("../product/product.service");
const enums_1 = require("../enums");
const market_segment_service_1 = require("../market-segment/market-segment.service");
const spot_service_1 = require("../spot/spot.service");
const channel_service_1 = require("../channel/channel.service");
const segment_functions_1 = require("../functions/segment.functions");
const common_functions_1 = require("../functions/common.functions");
const common_channels = ['TV', 'visual outdoor ads', 'auto radio podcasts'];
const target_channels = [
    'postal mailings',
    'SMM',
    'content marketing',
    'influencers',
];
let AdvancedFeaturesService = class AdvancedFeaturesService {
    constructor(afRepository, productService, marketService, spotService, channelService) {
        this.afRepository = afRepository;
        this.productService = productService;
        this.marketService = marketService;
        this.spotService = spotService;
        this.channelService = channelService;
    }
    async createAF(dto) {
        const af = await this.afRepository.create(dto);
        return af;
    }
    async getAll() {
        const all = await this.afRepository.findAll();
        return all;
    }
    async getByGame(gameId, round) {
        const afs = await this.afRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        return afs;
    }
    async getById(id) {
        const af = await this.afRepository.findOne({
            where: { id },
        });
        return af;
    }
    async updateAF(id, af) {
        try {
            const num = await this.afRepository.update(af, {
                where: { id },
            });
            return num;
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeById(id) {
        const num = await this.afRepository.destroy({ where: { id } });
        return num;
    }
    async calculateAcceptance(gameId, round) {
        const afs = await this.afRepository.findAll({
            where: { gameId, round },
            include: { all: true },
        });
        const segments = await this.marketService.getByGameRound(gameId, round);
        const market_peak_coverage = (0, segment_functions_1.totalMarket)(segments);
        const products = await this.productService.getProductsByGame(gameId, round);
        const products_af = products === null || products === void 0 ? void 0 : products.filter((prod) => prod.advanced_feature !== '');
        if (products_af.length > 0) {
            const afs_arr = (0, common_functions_1.enumToArrayNames)(enums_1.advanced_feature);
            afs_arr.shift();
            segments.forEach((segment) => {
                afs_arr.forEach(async (af) => {
                    const models = products_af.filter((model) => model.advanced_feature == af);
                    if ((models === null || models === void 0 ? void 0 : models.length) > 0) {
                        const k1 = models.filter((mod) => mod.retail_price <= segment.max_price &&
                            mod.retail_price >= segment.min_price).length;
                        const k2 = models.length - k1;
                        let factor_k = (k1 + k2 * 0.4) / 3;
                        if (factor_k > 1) {
                            factor_k = 1;
                        }
                        let factor_r = 0;
                        const spots = await this.spotService.getSpotsByGame(gameId, round);
                        const spots_af = spots.filter((sp) => sp.advanced_feature === af);
                        if ((spots_af === null || spots_af === void 0 ? void 0 : spots_af.length) > 0) {
                            spots_af.map((spot) => {
                                let spot_r = 0;
                                const val = segment[spot.value];
                                let commons = 0;
                                spot.channels.forEach((chan) => {
                                    if (common_channels.includes(chan)) {
                                        commons += 1;
                                    }
                                });
                                let targets = 0;
                                spot.channels.forEach((chan) => {
                                    if (target_channels.includes(chan)) {
                                        targets += 1;
                                    }
                                });
                                spot_r = (val * (commons / 2 + targets / 2) * spot.quality) / 5;
                                if (spot_r > 1) {
                                    spot_r = 1;
                                }
                                spot_r *= this.spotCorrection(spot);
                                factor_r += spot_r;
                            });
                        }
                        const channels = await this.channelService.getChannelsByGame(gameId, round);
                        const coverage_af = this.getCoverage(models, channels);
                        let factor_m = 0;
                        coverage_af > market_peak_coverage
                            ? (factor_m = 1)
                            : (factor_m = coverage_af / market_peak_coverage);
                        const af_seg = afs.find((item) => item.segmentId == segment.segment.id);
                        const need_af_seg = af_seg[this.getNeed(af)]
                            ? af_seg[this.getNeed(af)]
                            : 0;
                        let sum_factors = factor_k + factor_r + factor_m;
                        if (sum_factors > 1) {
                            sum_factors = 1;
                        }
                        let acceptance_af_seg = need_af_seg * sum_factors;
                        const prev_acceptance = af_seg[this.getAcceptance(af)]
                            ? af_seg[this.getAcceptance(af)]
                            : 0;
                        if (prev_acceptance > 0) {
                            if (acceptance_af_seg > prev_acceptance) {
                                acceptance_af_seg += prev_acceptance / 4;
                            }
                            else {
                                const accept = acceptance_af_seg;
                                acceptance_af_seg = prev_acceptance + accept / 4;
                            }
                        }
                        if (acceptance_af_seg > 1) {
                            acceptance_af_seg = 1;
                        }
                        af_seg[this.getAcceptance(af)] = (0, common_functions_1.roundNumber)(acceptance_af_seg, 2);
                        await af_seg.save();
                    }
                });
            });
        }
        return afs;
    }
    getNeed(feature) {
        if (feature == '' || !feature) {
            return '';
        }
        let need = feature.replace(/\s+/g, '_') + '_need';
        if (feature == 'positioning tracker') {
            need = 'positioning_need';
        }
        else if (feature == 'against loss insurance') {
            need = 'loss_insurance_need';
        }
        else if (feature == 'environment friendly utilization') {
            need = 'friendly_utilization_need';
        }
        else if (feature == 'charity profit sharing') {
            need = 'profit_sharing_need';
        }
        return need;
    }
    getAcceptance(feature) {
        let acceptance = feature.replace(/\s+/g, '_') + '_acceptance';
        if (feature == 'positioning tracker') {
            acceptance = 'positioning_acceptance';
        }
        else if (feature == 'against loss insurance') {
            acceptance = 'loss_insurance_acceptance';
        }
        else if (feature == 'environment friendly utilization') {
            acceptance = 'friendly_utilization_acceptance';
        }
        else if (feature == 'charity profit sharing') {
            acceptance = 'profit_sharing_acceptance';
        }
        return acceptance;
    }
    spotCorrection(spot) {
        let rate = 1;
        if (spot.objective == 'stimulate purchase') {
            rate = 0.8;
        }
        else if (spot.objective == 'introduce brand') {
            rate = 0.7;
        }
        else if (spot.objective == 'maintain loyalty') {
            rate = 0.6;
        }
        return rate;
    }
    getCoverage(models, channels) {
        const trademarks = [];
        models.map(function (model) {
            const inArr = trademarks.find((tr) => tr == model.trademarkId);
            if (!inArr) {
                trademarks.push(model.trademarkId);
            }
        });
        const channels_tr = [];
        trademarks.forEach(function (tr) {
            channels.map((channel) => {
                const matched = channel.trademarks.filter((trad) => trad.id == tr);
                if (matched.length > 0) {
                    channels_tr.push(channel);
                }
            });
        });
        const coverage = channels_tr.reduce((sum, chan) => {
            return (sum += chan.peak_market_coverage * chan.stores);
        }, 0);
        return coverage;
    }
    async transitionNeeds(gameId, round) {
        const needs = await this.afRepository.findAll({
            where: { gameId, round },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        if ((needs === null || needs === void 0 ? void 0 : needs.length) > 0) {
            needs.forEach(async (item) => {
                const dto = {
                    gameId: Number(gameId),
                    round: Number(round + 1),
                    segmentId: item.segmentId,
                    positioning_need: (0, common_functions_1.roundNumber)(item.positioning_need * 1.03, 2),
                    power_bank_need: (0, common_functions_1.roundNumber)(item.power_bank_need * 1.03, 2),
                    missed_items_warning_need: (0, common_functions_1.roundNumber)(item.missed_items_warning_need * 1.03, 2),
                    danger_alarm_need: (0, common_functions_1.roundNumber)(item.danger_alarm_need * 1.03, 2),
                    fridge_camera_need: (0, common_functions_1.roundNumber)(item.fridge_camera_need * 1.03, 2),
                    loss_insurance_need: (0, common_functions_1.roundNumber)(item.loss_insurance_need * 1.03, 2),
                    friendly_utilization_need: (0, common_functions_1.roundNumber)(item.friendly_utilization_need * 1.03, 2),
                    profit_sharing_need: (0, common_functions_1.roundNumber)(item.profit_sharing_need * 1.03, 2),
                    individual_pictures_need: (0, common_functions_1.roundNumber)(item.individual_pictures_need * 1.03, 2),
                };
                await this.createAF(dto);
            });
        }
    }
};
AdvancedFeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(advanced_features_model_1.AdvancedFeature)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService,
        market_segment_service_1.MarketSegmentService,
        spot_service_1.SpotService,
        channel_service_1.ChannelService])
], AdvancedFeaturesService);
exports.AdvancedFeaturesService = AdvancedFeaturesService;
//# sourceMappingURL=advanced-features.service.js.map