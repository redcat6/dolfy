"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwarenessModule = void 0;
const common_1 = require("@nestjs/common");
const awareness_controller_1 = require("./awareness.controller");
const awareness_service_1 = require("./awareness.service");
const awareness_model_1 = require("./awareness.model");
const trademark_model_1 = require("../trademark/trademark.model");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const channel_module_1 = require("../channel/channel.module");
const market_segment_module_1 = require("../market-segment/market-segment.module");
const spot_module_1 = require("../spot/spot.module");
let AwarenessModule = class AwarenessModule {
};
AwarenessModule = __decorate([
    (0, common_1.Module)({
        controllers: [awareness_controller_1.AwarenessController],
        providers: [awareness_service_1.AwarenessService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([awareness_model_1.Awareness, trademark_model_1.Trademark]),
            jwt_1.JwtModule,
            channel_module_1.ChannelModule,
            market_segment_module_1.MarketSegmentModule,
            spot_module_1.SpotModule,
        ],
        exports: [awareness_service_1.AwarenessService],
    })
], AwarenessModule);
exports.AwarenessModule = AwarenessModule;
//# sourceMappingURL=awareness.module.js.map