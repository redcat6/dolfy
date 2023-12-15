"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalMarket = void 0;
const common_1 = require("@nestjs/common");
function totalMarket(segments) {
    const result = segments.reduce((sum, item) => {
        return (sum += item.segment.peak_size);
    }, 0);
    if (!result) {
        throw new common_1.HttpException("There are no segments' market parameters", common_1.HttpStatus.NOT_FOUND);
    }
    return result;
}
exports.totalMarket = totalMarket;
//# sourceMappingURL=segment.functions.js.map