"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
var boaproject_bytes_1 = require("boaproject-bytes");
function decode(textData) {
    textData = atob(textData);
    var data = [];
    for (var i = 0; i < textData.length; i++) {
        data.push(textData.charCodeAt(i));
    }
    return (0, boaproject_bytes_1.arrayify)(data);
}
exports.decode = decode;
function encode(data) {
    data = (0, boaproject_bytes_1.arrayify)(data);
    var textData = "";
    for (var i = 0; i < data.length; i++) {
        textData += String.fromCharCode(data[i]);
    }
    return btoa(textData);
}
exports.encode = encode;
//# sourceMappingURL=browser-base64.js.map