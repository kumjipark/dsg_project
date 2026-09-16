import { PointerDownOutsideEvent } from "../dismissable-layer/types.mjs";
import { TooltipProps } from "./types.mjs";
import * as _$react from "react";
import { FocusEventHandler, MouseEventHandler, MutableRefObject, RefObject } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/tooltip/contexts.d.ts
type TooltipContextValue = {
  mode: Exclude<TooltipProps['mode'], undefined>;
  containerRef: RefObject<HTMLDivElement | null>;
  triggerRef: MutableRefObject<HTMLElement | null>;
  open: boolean;
  containerId: string;
  handleMouseOver: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
  handleFocus: FocusEventHandler<HTMLElement>;
  handleBlur: FocusEventHandler<HTMLElement>;
  handleMouseDown: MouseEventHandler<HTMLElement>;
  handleDismiss: () => void;
  handleClick: MouseEventHandler<HTMLElement>;
  handlePointerDownOutside: (e: PointerDownOutsideEvent) => void;
};
declare const TooltipProvider: _$react.FC<TooltipContextValue & {
    children: React.ReactNode;
  }>, useTooltipContext: (consumerName: string) => TooltipContextValue;
type TooltipGroupContextValue = {
  onOpen: () => void;
  onClose: () => void;
  isOpenWithoutDelayRef: RefObject<boolean>;
};
declare const TooltipGroupProvider: {
    (props: TooltipGroupContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useTooltipGroupContext: () => TooltipGroupContextValue | undefined;
//#endregion
export { TooltipGroupProvider, TooltipProvider, useTooltipContext, useTooltipGroupContext };