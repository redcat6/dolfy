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
exports.UpdateAFDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAFDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'positioning tracker need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'positioning tracker need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "positioning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'power bank need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'power bank need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "power_bank_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'missed items warning need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'missed items warning need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "missed_items_warning_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'danger alarm need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'danger alarm need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "danger_alarm_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'fridge camera need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'fridge camera need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "fridge_camera_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'loss insurance need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'loss insurance need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "loss_insurance_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'environment friendly utilization need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'environment friendly utilization need must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "friendly_utilization_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'profit sharing need value' }),
    (0, class_validator_1.IsNumber)({}, { message: 'profit sharing need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "profit_sharing_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'individual pictures need value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'individual pictures need value must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "individual_pictures_need", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'positioning tracker acceptance',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'positioning tracker acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "positioning_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'power bank acceptance' }),
    (0, class_validator_1.IsNumber)({}, { message: 'power bank acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "power_bank_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'missed items warning acceptance',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'missed items warning acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "missed_items_warning_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'danger alarm acceptance' }),
    (0, class_validator_1.IsNumber)({}, { message: 'danger alarm acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "danger_alarm_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'fridge camera acceptance' }),
    (0, class_validator_1.IsNumber)({}, { message: 'fridge camera acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "fridge_camera_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'loss insurance acceptance' }),
    (0, class_validator_1.IsNumber)({}, { message: 'loss insurance acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "loss_insurance_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'environment friendly utilization acceptance',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'environment friendly utilization acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "friendly_utilization_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.2', description: 'profit sharing acceptance' }),
    (0, class_validator_1.IsNumber)({}, { message: 'profit sharing acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "profit_sharing_acceptance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1.2',
        description: 'individual pictures acceptance value',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'individual pictures acceptance must be a number' }),
    __metadata("design:type", Number)
], UpdateAFDto.prototype, "individual_pictures_acceptance", void 0);
exports.UpdateAFDto = UpdateAFDto;
//# sourceMappingURL=update-features.dto.js.map