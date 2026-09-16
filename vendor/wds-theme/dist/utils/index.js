Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../_virtual/_rolldown/runtime.js");
let object_path = require("object-path");
object_path = require_runtime.__toESM(object_path);
//#region src/utils/index.ts
const getColorByToken = (theme, token) => object_path.default.get(theme, token);
const addHexOpacity = (hex, value) => hex.substring(0, 7) + Math.round(value * 255).toString(16).padStart(2, "0").toUpperCase();
//#endregion
exports.addHexOpacity = addHexOpacity;
exports.getColorByToken = getColorByToken;
