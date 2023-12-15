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
exports.EditChannelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EditChannelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'stores of channel' }),
    (0, class_validator_1.IsNumber)({}, { message: 'stores must be a number' }),
    __metadata("design:type", Number)
], EditChannelDto.prototype, "stores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '972',
        description: 'investment costs of channel creation',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'investment costs must be a number' }),
    __metadata("design:type", Number)
], EditChannelDto.prototype, "investment_costs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1582', description: 'operational costs of channel' }),
    (0, class_validator_1.IsNumber)({}, { message: 'operational costs must be a number' }),
    __metadata("design:type", Number)
], EditChannelDto.prototype, "operational_costs", void 0);
exports.EditChannelDto = EditChannelDto;
//# sourceMappingURL=edit-channel.dto.js.map