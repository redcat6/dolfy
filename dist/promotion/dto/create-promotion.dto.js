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
exports.CreatePromotionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePromotionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alpha bags spot', description: 'spot name' }),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], CreatePromotionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.05',
        description: 'cash back like as 0. 05 => 5%',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'cashback must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "cashback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'id of the trademark',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'trademark id must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100', description: 'gift cost' }),
    (0, class_validator_1.IsNumber)({}, { message: 'gift cost must be a number' }),
    __metadata("design:type", Number)
], CreatePromotionDto.prototype, "gift_cost", void 0);
exports.CreatePromotionDto = CreatePromotionDto;
//# sourceMappingURL=create-promotion.dto.js.map