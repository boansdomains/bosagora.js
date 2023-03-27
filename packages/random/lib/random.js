"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = void 0;
var crypto_1 = require("crypto");
var boaproject_bytes_1 = require("boaproject-bytes");
function randomBytes(length) {
    return (0, boaproject_bytes_1.arrayify)((0, crypto_1.randomBytes)(length));
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=random.js.map