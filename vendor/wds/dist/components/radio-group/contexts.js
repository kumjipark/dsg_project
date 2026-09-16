'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_radio_group_constants = require("./constants.js");
//#region src/components/radio-group/contexts.ts
const [RadioGroupProvider, useRadioGroupContext] = (0, require("@radix-ui/react-context").createContext)(require_components_radio_group_constants.RADIO_GROUP_NAME);
//#endregion
exports.RadioGroupProvider = RadioGroupProvider;
exports.useRadioGroupContext = useRadioGroupContext;
