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
exports.CreateSpotDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../enums");
class CreateSpotDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'round of spot creation' }),
    (0, class_validator_1.IsNumber)({}, { message: 'registr_round must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "register_round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alpha bags spot', description: 'spot name' }),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'design',
        description: 'core message focus (optional)',
    }),
    (0, class_validator_1.IsEnum)(enums_1.core_message),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "core_message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'power bank', description: 'advenced feature' }),
    (0, class_validator_1.IsEnum)(enums_1.advanced_feature),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "advanced_feature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fun', description: 'values for promotion' }),
    (0, class_validator_1.IsEnum)(enums_1.values),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'create demand', description: 'promotion objective' }),
    (0, class_validator_1.IsEnum)(enums_1.objectives),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'level of the spot quality' }),
    (0, class_validator_1.IsNumber)({}, { message: 'spot quality must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'attractive', description: 'price' }),
    (0, class_validator_1.IsString)({ message: 'price must be a string' }),
    __metadata("design:type", String)
], CreateSpotDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'id of the trademark',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'trademark id must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[Business]',
        description: 'array of the segments name',
    }),
    (0, class_validator_1.IsArray)({ message: 'segments must be an aaray' }),
    __metadata("design:type", Array)
], CreateSpotDto.prototype, "segments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[TV, SMM]',
        description: 'array of the channels name',
    }),
    (0, class_validator_1.IsArray)({ message: 'channels must be an aaray' }),
    __metadata("design:type", Array)
], CreateSpotDto.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'investments of the spot' }),
    (0, class_validator_1.IsNumber)({}, { message: 'investments must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "investments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'spot operations costs' }),
    (0, class_validator_1.IsNumber)({}, { message: 'operations must be a number' }),
    __metadata("design:type", Number)
], CreateSpotDto.prototype, "operations", void 0);
exports.CreateSpotDto = CreateSpotDto;
//# sourceMappingURL=create-spot.dto.js.map