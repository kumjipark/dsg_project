import { ScopedProps } from "../../hooks/internal/use-scope-context.js";
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from "./types.js";
import * as _$react from "react";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/popover/index.d.ts
declare const Popover: {
  ({
    open: originOpen,
    defaultOpen,
    onOpenChange,
    children,
    __scopePopover
  }: ScopedProps<PopoverProps, "Popover">): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const PopoverTrigger: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const PopoverContent: PolymorphicComponentInternal<PopoverContentProps, "div">;
//#endregion
export { Popover, PopoverContent, type PopoverContentProps, type PopoverProps, PopoverTrigger, type PopoverTriggerProps };