'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_stepper_constants = require("./constants.js");
//#region src/components/stepper/contexts.ts
const [StepperProvider, useStepperContext] = (0, require("@radix-ui/react-context").createContext)(require_components_stepper_constants.STEPPER_NAME);
//#endregion
exports.StepperProvider = StepperProvider;
exports.useStepperContext = useStepperContext;
