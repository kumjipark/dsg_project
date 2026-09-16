'use client';
import { PROGRESS_STEP_INDICATOR_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/progress-step-indicator/contexts.ts
const [ProgressStepIndicatorProvider, useProgressStepIndicatorContext] = createContext(PROGRESS_STEP_INDICATOR_NAME);
//#endregion
export { ProgressStepIndicatorProvider, useProgressStepIndicatorContext };
