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
exports.CreateChainDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var chaintype;
(function (chaintype) {
    chaintype[chaintype["online"] = 0] = "online";
    chaintype[chaintype["brick&mortar"] = 1] = "brick&mortar";
})(chaintype || (chaintype = {}));
class CreateChainDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'game identifier' }),
    (0, class_validator_1.IsNumber)({}, { message: 'game_id must be a number' }),
    __metadata("design:type", Number)
], CreateChainDto.prototype, "gameId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'wilaberries',
        description: 'independent chain name',
    }),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], CreateChainDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'brick&mortar',
        description: 'independent chain type',
    }),
    (0, class_validator_1.IsEnum)(chaintype),
    __metadata("design:type", String)
], CreateChainDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'chain stores' }),
    (0, class_validator_1.IsNumber)({}, { message: 'stores must be a number' }),
    __metadata("design:type", Number)
], CreateChainDto.prototype, "stores", void 0);
exports.CreateChainDto = CreateChainDto;
//# sourceMappingURL=create-chain.dto.js.map