'use client';
import { createScopeContext } from "../../hooks/internal/use-scope-context.mjs";
import { POPOVER_NAME } from "./constants.mjs";
//#region src/components/popover/contexts.ts
const [PopoverProvider, usePopoverContext] = createScopeContext(POPOVER_NAME);
//#endregion
export { PopoverProvider, usePopoverContext };
