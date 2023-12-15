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
exports.CreateInstituteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInstituteDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Russia', description: 'country of the institute' }),
    (0, class_validator_1.IsString)({ message: 'country must be a string' }),
    __metadata("design:type", String)
], CreateInstituteDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Moskow', description: 'city of the institute' }),
    (0, class_validator_1.IsString)({ message: 'city must be a string' }),
    __metadata("design:type", String)
], CreateInstituteDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MIPT', description: "institute's name" }),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], CreateInstituteDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12/23-06-2022',
        description: 'number of the contract',
    }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    __metadata("design:type", String)
], CreateInstituteDto.prototype, "contract", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1200', description: 'price' }),
    (0, class_validator_1.IsNumber)({}, { message: 'This must be a number' }),
    __metadata("design:type", Number)
], CreateInstituteDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2022-12-03',
        description: 'date of contract expiration',
    }),
    __metadata("design:type", Date)
], CreateInstituteDto.prototype, "date_expired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'free',
        description: 'comments',
    }),
    (0, class_validator_1.IsString)({ message: 'comments must be a string' }),
    __metadata("design:type", String)
], CreateInstituteDto.prototype, "comments", void 0);
exports.CreateInstituteDto = CreateInstituteDto;
//# sourceMappingURL=create-institute.dto.js.map