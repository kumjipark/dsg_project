import { TooltipContentProps, TooltipGroupProps, TooltipProps, TooltipTriggerProps } from "./types.mjs";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/tooltip/index.d.ts
declare const TooltipGroup: {
  ({
    children,
    skipDelayDuration
  }: TooltipGroupProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const Tooltip: {
  ({
    mode,
    open: originOpen,
    defaultOpen,
    onOpenChange,
    children,
    enterDelay,
    leaveDelay,
    disableCloseOnPointDown,
    disableOpenOnFocus,
    enableOpenOnFocusVisibleOnly
  }: TooltipProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const TooltipTrigger: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const TooltipContent: PolymorphicComponentInternal<TooltipContentProps, "div">;
//#endregion
export { Tooltip, TooltipContent, type TooltipContentProps, TooltipGroup, type TooltipGroupProps, type TooltipProps, TooltipTrigger, type TooltipTriggerProps };