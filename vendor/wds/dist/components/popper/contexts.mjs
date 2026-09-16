'use client';
import { createScopeContext } from "../../hooks/internal/use-scope-context.mjs";
import { POPPER_CONTENT_NAME, POPPER_NAME } from "./constants.mjs";
//#region src/components/popper/contexts.ts
const [PopperProvider, usePopperContext] = createScopeContext(POPPER_NAME);
const [PopperContentProvider, usePopperContentContext] = createScopeContext(POPPER_CONTENT_NAME);
//#endregion
export { PopperContentProvider, PopperProvider, usePopperContentContext, usePopperContext };
