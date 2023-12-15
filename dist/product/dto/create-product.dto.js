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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../enums");
class CreateProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '_icy78c0', description: 'product identifier' }),
    (0, class_validator_1.IsString)({ message: 'id must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'trademark of the product' }),
    (0, class_validator_1.IsString)({ message: 'trademark must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "trademark", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'model-4',
        description: 'name of product',
    }),
    (0, class_validator_1.IsString)({ message: 'Model must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'material must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'manufacturing must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "manufacturing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of design quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'design must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "design", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'type of design' }),
    (0, class_validator_1.IsEnum)(enums_1.designType),
    __metadata("design:type", String)
], CreateProductDto.prototype, "design_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'number of model variations' }),
    (0, class_validator_1.IsNumber)({}, { message: 'variations must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "variations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'individual pictures',
        description: 'advanced feature name',
    }),
    (0, class_validator_1.IsString)({ message: 'advenced feature  must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "advanced_feature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17.2', description: 'unit cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'unit cost must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "unit_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'r&d investments' }),
    (0, class_validator_1.IsNumber)({}, { message: 'investments must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "investments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'number of month to available the product',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'available (from) must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "available_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'number of month till the product available',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'available (till) must be a number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "available_till", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map