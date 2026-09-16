'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_hooks_internal_use_scope_context = require("../../hooks/internal/use-scope-context.js");
const require_components_popper_constants = require("./constants.js");
//#region src/components/popper/contexts.ts
const [PopperProvider, usePopperContext] = require_hooks_internal_use_scope_context.createScopeContext(require_components_popper_constants.POPPER_NAME);
const [PopperContentProvider, usePopperContentContext] = require_hooks_internal_use_scope_context.createScopeContext(require_components_popper_constants.POPPER_CONTENT_NAME);
//#endregion
exports.PopperContentProvider = PopperContentProvider;
exports.PopperProvider = PopperProvider;
exports.usePopperContentContext = usePopperContentContext;
exports.usePopperContext = usePopperContext;
