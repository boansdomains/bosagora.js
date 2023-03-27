import { concat } from "boaproject-bytes";
import { keccak256 } from "boaproject-keccak256";
import { toUtf8Bytes } from "boaproject-strings";
export const messagePrefix = "\x19Ethereum Signed Message:\n";
export function hashMessage(message) {
    if (typeof (message) === "string") {
        message = toUtf8Bytes(message);
    }
    return keccak256(concat([
        toUtf8Bytes(messagePrefix),
        toUtf8Bytes(String(message.length)),
        message
    ]));
}
//# sourceMappingURL=message.js.map