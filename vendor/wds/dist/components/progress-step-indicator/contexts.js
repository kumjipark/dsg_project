'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_progress_step_indicator_constants = require("./constants.js");
//#region src/components/progress-step-indicator/contexts.ts
const [ProgressStepIndicatorProvider, useProgressStepIndicatorContext] = (0, require("@radix-ui/react-context").createContext)(require_components_progress_step_indicator_constants.PROGRESS_STEP_INDICATOR_NAME);
//#endregion
exports.ProgressStepIndicatorProvider = ProgressStepIndicatorProvider;
exports.useProgressStepIndicatorContext = useProgressStepIndicatorContext;
