"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
var boaproject_keccak256_1 = require("boaproject-keccak256");
var boaproject_strings_1 = require("boaproject-strings");
function id(text) {
    return (0, boaproject_keccak256_1.keccak256)((0, boaproject_strings_1.toUtf8Bytes)(text));
}
exports.id = id;
//# sourceMappingURL=id.js.map