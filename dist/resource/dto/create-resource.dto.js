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
exports.CreateResourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateResourceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team capacities for current round',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'capacities must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "capacities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 050',
        description: 'team capacities increase for next round',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'capacities_increase must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "capacities_increase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15 050',
        description: 'team long term debt',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'long_term_debt must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "long_term_debt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1350',
        description: 'team borrowings for next rounds',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'borrowings must be a number' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "borrowings", void 0);
exports.CreateResourceDto = CreateResourceDto;
//# sourceMappingURL=create-resource.dto.js.map