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
exports.CreateIntermediaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateIntermediaryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team production assets',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'production_assets must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "production_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team retail assets',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'retail_assets must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "retail_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team production depreciation',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'production_depreciation must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "production_depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team retail depreciation in $',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'retail_depreciation must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "retail_depreciation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10 000',
        description: 'team franchise cost',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'franchise_cost must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "franchise_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team franchise fee',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'franchise_fee must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "franchise_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15 050',
        description: 'team retail entry',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'retail_entry must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "retail_entry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team retail annual fee',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'retail_annual_fee must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "retail_annual_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team invest assets',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'invest_assets must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "invest_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team market research',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'market_research must be a number' }),
    __metadata("design:type", Number)
], CreateIntermediaryDto.prototype, "market_research", void 0);
exports.CreateIntermediaryDto = CreateIntermediaryDto;
//# sourceMappingURL=create-intermediary.dto.js.map