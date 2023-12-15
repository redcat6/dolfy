"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const segment_controller_1 = require("./segment.controller");
const segment_service_1 = require("./segment.service");
const segment_model_1 = require("./segment.model");
const market_segment_model_1 = require("../market-segment/market-segment.model");
let SegmentModule = class SegmentModule {
};
SegmentModule = __decorate([
    (0, common_1.Module)({
        controllers: [segment_controller_1.SegmentController],
        providers: [segment_service_1.SegmentService],
        imports: [sequelize_1.SequelizeModule.forFeature([segment_model_1.Segment, market_segment_model_1.MarketSegment]), jwt_1.JwtModule],
        exports: [segment_service_1.SegmentService],
    })
], SegmentModule);
exports.SegmentModule = SegmentModule;
//# sourceMappingURL=segment.module.js.map