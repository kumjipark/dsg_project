'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_hooks_internal_use_scope_context = require("../../hooks/internal/use-scope-context.js");
const require_components_popover_constants = require("./constants.js");
//#region src/components/popover/contexts.ts
const [PopoverProvider, usePopoverContext] = require_hooks_internal_use_scope_context.createScopeContext(require_components_popover_constants.POPOVER_NAME);
//#endregion
exports.PopoverProvider = PopoverProvider;
exports.usePopoverContext = usePopoverContext;
