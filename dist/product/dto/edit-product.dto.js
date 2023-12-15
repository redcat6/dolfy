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
exports.EditProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EditProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of material quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'material must be a number' }),
    __metadata("design:type", Number)
], EditProductDto.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of manufacturing quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'manufacturing must be a number' }),
    __metadata("design:type", Number)
], EditProductDto.prototype, "manufacturing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'number of model variations' }),
    (0, class_validator_1.IsNumber)({}, { message: 'variations must be a number' }),
    __metadata("design:type", Number)
], EditProductDto.prototype, "variations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'individual pictures',
        description: 'advanced feature name',
    }),
    (0, class_validator_1.IsString)({ message: 'advenced feature  must be a string' }),
    __metadata("design:type", String)
], EditProductDto.prototype, "advanced_feature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'number of month to available the product',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'available (from) must be a number' }),
    __metadata("design:type", Number)
], EditProductDto.prototype, "available_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'number of month till the product available',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'available (till) must be a number' }),
    __metadata("design:type", Number)
], EditProductDto.prototype, "available_till", void 0);
exports.EditProductDto = EditProductDto;
//# sourceMappingURL=edit-product.dto.js.map