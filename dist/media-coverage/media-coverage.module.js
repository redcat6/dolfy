"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaCoverageModule = void 0;
const common_1 = require("@nestjs/common");
const media_coverage_controller_1 = require("./media-coverage.controller");
const media_coverage_service_1 = require("./media-coverage.service");
const segment_model_1 = require("../segment/segment.model");
const sequelize_1 = require("@nestjs/sequelize");
const media_coverage_model_1 = require("./media-coverage.model");
const jwt_1 = require("@nestjs/jwt");
let MediaCoverageModule = class MediaCoverageModule {
};
MediaCoverageModule = __decorate([
    (0, common_1.Module)({
        controllers: [media_coverage_controller_1.MediaCoverageController],
        providers: [media_coverage_service_1.MediaCoverageService],
        imports: [sequelize_1.SequelizeModule.forFeature([media_coverage_model_1.MediaCoverage, segment_model_1.Segment]), jwt_1.JwtModule],
        exports: [media_coverage_service_1.MediaCoverageService],
    })
], MediaCoverageModule);
exports.MediaCoverageModule = MediaCoverageModule;
//# sourceMappingURL=media-coverage.module.js.map