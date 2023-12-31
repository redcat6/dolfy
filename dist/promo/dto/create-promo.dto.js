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
exports.CreatePromoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePromoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'institute id' }),
    (0, class_validator_1.IsNumber)({}, { message: 'instituteId must be a number' }),
    __metadata("design:type", Number)
], CreatePromoDto.prototype, "instituteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'user id' }),
    (0, class_validator_1.IsString)({ message: 'user_name must be a string' }),
    __metadata("design:type", String)
], CreatePromoDto.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eov9gfn0hn', description: 'promo-code' }),
    (0, class_validator_1.IsString)({ message: 'code must be a string' }),
    __metadata("design:type", String)
], CreatePromoDto.prototype, "code", void 0);
exports.CreatePromoDto = CreatePromoDto;
//# sourceMappingURL=create-promo.dto.js.map