'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_hooks_internal_use_loose_context = require("../../hooks/internal/use-loose-context.js");
const require_components_tooltip_constants = require("./constants.js");
//#region src/components/tooltip/contexts.ts
const [TooltipProvider, useTooltipContext] = (0, require("@radix-ui/react-context").createContext)(require_components_tooltip_constants.TOOLTIP_NAME);
const [TooltipGroupProvider, useTooltipGroupContext] = require_hooks_internal_use_loose_context.default(require_components_tooltip_constants.TOOLTIP_GROUP_NAME);
//#endregion
exports.TooltipGroupProvider = TooltipGroupProvider;
exports.TooltipProvider = TooltipProvider;
exports.useTooltipContext = useTooltipContext;
exports.useTooltipGroupContext = useTooltipGroupContext;
