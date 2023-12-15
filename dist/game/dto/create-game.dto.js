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
exports.CreateGameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var gameCategory;
(function (gameCategory) {
    gameCategory[gameCategory["simple"] = 0] = "simple";
    gameCategory[gameCategory["standart"] = 1] = "standart";
    gameCategory[gameCategory["advanced"] = 2] = "advanced";
})(gameCategory || (gameCategory = {}));
class CreateGameDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'user identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'userId must be a number' }),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'standart',
        description: 'category of game: simple, standart or advanced',
    }),
    (0, class_validator_1.IsEnum)(gameCategory),
    __metadata("design:type", String)
], CreateGameDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 part group Eki-35',
        description: 'description of game',
    }),
    (0, class_validator_1.IsString)({ message: 'This must be a string' }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "description", void 0);
exports.CreateGameDto = CreateGameDto;
//# sourceMappingURL=create-game.dto.js.map