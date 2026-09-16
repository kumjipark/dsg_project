'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_segmented_control_constants = require("./constants.js");
//#region src/components/segmented-control/contexts.ts
const [SegmentedControlProvider, useSegmentedControlContext] = (0, require("@radix-ui/react-context").createContext)(require_components_segmented_control_constants.SEGMENTED_CONTROL_NAME);
//#endregion
exports.SegmentedControlProvider = SegmentedControlProvider;
exports.useSegmentedControlContext = useSegmentedControlContext;
