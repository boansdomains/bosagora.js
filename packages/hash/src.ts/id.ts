import { keccak256 } from "boaproject-keccak256";
import { toUtf8Bytes } from "boaproject-strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
