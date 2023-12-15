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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.com', description: 'user email' }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Incorrect email format' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'vjro904368jhl', description: 'user password' }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    (0, class_validator_1.Length)(6, 12, { message: 'Must be from 6 to 12 characters' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Natalia Zharko', description: 'user name' }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PROFF', description: 'user role' }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "role", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map