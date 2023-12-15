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
exports.CreateMonthSalesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMonthSalesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'trademark identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'trademark id must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "trademarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'segment identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'segment id must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5', description: 'month' }),
    (0, class_validator_1.IsNumber)({}, { message: 'month id must be a number' }),
    __metadata("design:type", Number)
], CreateMonthSalesDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '_vjk89b5', description: 'product identifier' }),
    (0, class_validator_1.IsString)({ message: 'productId id must be a string' }),
    __metadata("design:type", String)
], CreateMonthSalesDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'M-01', description: 'model name' }),
    (0, class_validator_1.IsString)({ message: 'model id must be a string' }),
    __metadata("design:type", String)
], CreateMonthSalesDto.prototype, "model", void 0);
exports.CreateMonthSalesDto = CreateMonthSalesDto;
//# sourceMappingURL=create-month-sales.dto.js.map