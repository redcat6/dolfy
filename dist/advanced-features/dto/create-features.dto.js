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
exports.CreateAFDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAFDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'game id' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'current round' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'segment id' }),
    (0, class_validator_1.IsNumber)({}, { message: 'segment id must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'positioning tracker need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'positioning tracker need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "positioning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'power bank need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'power bank need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "power_bank_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'missed items warning need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'missed items warning need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "missed_items_warning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'danger alarm need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'danger alarm need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "danger_alarm_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'fridge camera need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'fridge camera need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "fridge_camera_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'loss insurance need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'loss insurance need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "loss_insurance_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'environment friendly utilization need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'environment friendly utilization need must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "friendly_utilization_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'profit sharing need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'profit sharing need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "profit_sharing_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'individual pictures need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'individual pictures need value must be a number' }),
    __metadata("design:type", Number)
], CreateAFDto.prototype, "individual_pictures_need", void 0);
exports.CreateAFDto = CreateAFDto;
//# sourceMappingURL=create-features.dto.js.map