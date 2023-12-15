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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMediaCoverageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMediaCoverageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.004', description: 'smm impression cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'smm must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "smm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.002', description: 'content ads impression cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'content_ads must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "content_ads", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.003',
        description: 'bloggers&influencers impression cost',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'bloggers_influencers must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "bloggers_influencers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.05', description: 'postal mail cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'smm must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "postal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '90000',
        description: 'outdoor advertising compain cost',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'outdoor_advertising must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "outdoor_advertising", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '45000',
        description: 'autoradio podcasts compain cost',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'autoradio_podcasts must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "autoradio_podcasts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.04', description: 'tv compain cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'tv must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "tv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'segment identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'segment id must be a number' }),
    __metadata("design:type", Number)
], CreateMediaCoverageDto.prototype, "segmentId", void 0);
exports.CreateMediaCoverageDto = CreateMediaCoverageDto;
//# sourceMappingURL=create-media-coverage.dto.js.map