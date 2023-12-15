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
exports.CreateMarketSegmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMarketSegmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game_id must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'current round of game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'segment identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'segment id must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '150', description: 'max price for segment' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "max_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '50', description: 'min price for segment' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "min_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchase habits' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "lowest_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.2', description: 'purchase habits' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "best_quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchase habits' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "on_line", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchase habits' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "off_line", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.7', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "family", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "attractiveness", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "personality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "social_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "fun", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "friendship", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "pets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "independent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "brand_high", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "brand_not", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'purchasing preferences' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "brand_somehow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_classic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_art", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_business", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_casual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.8', description: 'design type' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_innovative", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "design_5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "material_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "material_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "material_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "material_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "material_5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "manufacturing_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "manufacturing_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "manufacturing_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "manufacturing_4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateMarketSegmentDto.prototype, "manufacturing_5", void 0);
exports.CreateMarketSegmentDto = CreateMarketSegmentDto;
//# sourceMappingURL=create-market-segment.dto.js.map