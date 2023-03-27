"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashMessage = exports.messagePrefix = void 0;
var boaproject_bytes_1 = require("boaproject-bytes");
var boaproject_keccak256_1 = require("boaproject-keccak256");
var boaproject_strings_1 = require("boaproject-strings");
exports.messagePrefix = "\x19Ethereum Signed Message:\n";
function hashMessage(message) {
    if (typeof (message) === "string") {
        message = (0, boaproject_strings_1.toUtf8Bytes)(message);
    }
    return (0, boaproject_keccak256_1.keccak256)((0, boaproject_bytes_1.concat)([
        (0, boaproject_strings_1.toUtf8Bytes)(exports.messagePrefix),
        (0, boaproject_strings_1.toUtf8Bytes)(String(message.length)),
        message
    ]));
}
exports.hashMessage = hashMessage;
//# sourceMappingURL=message.js.map