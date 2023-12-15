"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumToArrayNames = exports.roundNumber = void 0;
function roundNumber(num, decimalPlaces = 0) {
    const p = Math.pow(10, decimalPlaces);
    const n = num * p * (1 + Number.EPSILON);
    return Math.round(n) / p;
}
exports.roundNumber = roundNumber;
function enumToArrayNames(data) {
    return Object.keys(data).filter((topping) => !new RegExp(/[0-9]/g).test(topping));
}
exports.enumToArrayNames = enumToArrayNames;
//# sourceMappingURL=common.functions.js.map