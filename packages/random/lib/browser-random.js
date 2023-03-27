"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = void 0;
var boaproject_bytes_1 = require("boaproject-bytes");
var boaproject_logger_1 = require("boaproject-logger");
var _version_1 = require("./_version");
var logger = new boaproject_logger_1.Logger(_version_1.version);
// Debugging line for testing browser lib in node
//const window = { crypto: { getRandomValues: () => { } } };
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
}
;
var anyGlobal = getGlobal();
var crypto = anyGlobal.crypto || anyGlobal.msCrypto;
if (!crypto || !crypto.getRandomValues) {
    logger.warn("WARNING: Missing strong random number source");
    crypto = {
        getRandomValues: function (buffer) {
            return logger.throwError("no secure random source avaialble", boaproject_logger_1.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "crypto.getRandomValues"
            });
        }
    };
}
function randomBytes(length) {
    if (length <= 0 || length > 1024 || (length % 1) || length != length) {
        logger.throwArgumentError("invalid length", "length", length);
    }
    var result = new Uint8Array(length);
    crypto.getRandomValues(result);
    return (0, boaproject_bytes_1.arrayify)(result);
}
exports.randomBytes = randomBytes;
;
//# sourceMappingURL=browser-random.js.map