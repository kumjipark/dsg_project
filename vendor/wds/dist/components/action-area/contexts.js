'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_action_area_constants = require("./constants.js");
//#region src/components/action-area/contexts.ts
const [ActionAreaProvider, useActionAreaContext] = (0, require("@radix-ui/react-context").createContext)(require_components_action_area_constants.ACTION_AREA_NAME);
//#endregion
exports.ActionAreaProvider = ActionAreaProvider;
exports.useActionAreaContext = useActionAreaContext;
