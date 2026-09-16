'use client';
import { SEGMENTED_CONTROL_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/segmented-control/contexts.ts
const [SegmentedControlProvider, useSegmentedControlContext] = createContext(SEGMENTED_CONTROL_NAME);
//#endregion
export { SegmentedControlProvider, useSegmentedControlContext };
