'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_time_view_constants = require("./constants.js");
//#region src/components/time-view/contexts.tsx
const [TimeViewContextProvider, useTimeViewContext] = (0, require("@radix-ui/react-context").createContext)(require_components_time_view_constants.TIME_VIEW_NAME);
//#endregion
exports.TimeViewContextProvider = TimeViewContextProvider;
exports.useTimeViewContext = useTimeViewContext;
