'use client';
import { STEPPER_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/stepper/contexts.ts
const [StepperProvider, useStepperContext] = createContext(STEPPER_NAME);
//#endregion
export { StepperProvider, useStepperContext };
