"use strict";

import { arrayify } from "boaproject-bytes";

import { Logger } from "boaproject-logger";
import { version } from "./_version";
const logger = new Logger(version);

// Debugging line for testing browser lib in node
//const window = { crypto: { getRandomValues: () => { } } };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
function getGlobal(): any {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

const anyGlobal = getGlobal();

let crypto: any = anyGlobal.crypto || anyGlobal.msCrypto;
if (!crypto || !crypto.getRandomValues) {

    logger.warn("WARNING: Missing strong random number source");

    crypto = {
        getRandomValues: function(buffer: Uint8Array): Uint8Array {
            return logger.throwError("no secure random source avaialble", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "crypto.getRandomValues"
            });
        }
    };
}

export function randomBytes(length: number): Uint8Array {
    if (length <= 0 || length > 1024 || (length % 1) || length != length) {
        logger.throwArgumentError("invalid length", "length", length);
    }

    const result = new Uint8Array(length);
    crypto.getRandomValues(result);
    return arrayify(result);
};
