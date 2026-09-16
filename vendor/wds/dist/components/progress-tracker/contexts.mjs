'use client';
import { PROGRESS_TRACKER_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/progress-tracker/contexts.ts
const [ProgressTrackerProvider, useProgressTrackerContext] = createContext(PROGRESS_TRACKER_NAME);
//#endregion
export { ProgressTrackerProvider, useProgressTrackerContext };
