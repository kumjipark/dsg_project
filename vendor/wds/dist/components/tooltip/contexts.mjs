'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
import { TOOLTIP_GROUP_NAME, TOOLTIP_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/tooltip/contexts.ts
const [TooltipProvider, useTooltipContext] = createContext(TOOLTIP_NAME);
const [TooltipGroupProvider, useTooltipGroupContext] = createLooseContext(TOOLTIP_GROUP_NAME);
//#endregion
export { TooltipGroupProvider, TooltipProvider, useTooltipContext, useTooltipGroupContext };
