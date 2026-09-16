'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_progress_tracker_constants = require("./constants.js");
//#region src/components/progress-tracker/contexts.ts
const [ProgressTrackerProvider, useProgressTrackerContext] = (0, require("@radix-ui/react-context").createContext)(require_components_progress_tracker_constants.PROGRESS_TRACKER_NAME);
//#endregion
exports.ProgressTrackerProvider = ProgressTrackerProvider;
exports.useProgressTrackerContext = useProgressTrackerContext;
