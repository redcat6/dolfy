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
exports.CreateFinancesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFinancesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team fixed assets',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'fixed_assets must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "fixed_assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team cash',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'cash must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "cash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10 000 000',
        description: 'team contributed capital',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'contributed_capital must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "contributed_capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15 050',
        description: 'team long term debt',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'long_term_debt must be a number' }),
    __metadata("design:type", Number)
], CreateFinancesDto.prototype, "long_term_debt", void 0);
exports.CreateFinancesDto = CreateFinancesDto;
//# sourceMappingURL=create-finances.dto.js.map