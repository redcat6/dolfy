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
exports.CreateChannelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateChannelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game id must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'current round of the game' }),
    (0, class_validator_1.IsNumber)({}, { message: 'round must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'round of the channel creation' }),
    (0, class_validator_1.IsNumber)({}, { message: 'register_round must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "register_round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'team identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'team id must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'type of channel' }),
    (0, class_validator_1.IsNumber)({}, { message: 'type must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.5',
        description: 'name of channel',
    }),
    (0, class_validator_1.IsString)({ message: 'name of channel must be a string' }),
    __metadata("design:type", String)
], CreateChannelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'type of channel' }),
    (0, class_validator_1.IsNumber)({}, { message: 'number of stores must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "stores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'investment costs of channel creation',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'investment costs must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "investment_costs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'operational costs of channel' }),
    (0, class_validator_1.IsNumber)({}, { message: 'operational costs must be a number' }),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "operational_costs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0.5',
        description: 'name of trademark',
    }),
    (0, class_validator_1.IsArray)({ message: ' trademarks must be an array of strings' }),
    __metadata("design:type", Array)
], CreateChannelDto.prototype, "trademarks", void 0);
exports.CreateChannelDto = CreateChannelDto;
//# sourceMappingURL=create-channel.dto.js.map