import { keccak256 } from "boaproject-keccak256";
import { toUtf8Bytes } from "boaproject-strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map