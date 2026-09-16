import { PointerDownOutsideEvent } from "../dismissable-layer/types.mjs";
import { TooltipProps } from "./types.mjs";
import * as _$react from "react";
import { MouseEvent, MouseEventHandler } from "react";

//#region src/components/tooltip/hooks.d.ts
declare const useTooltip: ({
  mode,
  open: originOpen,
  defaultOpen,
  onOpenChange,
  enterDelay,
  leaveDelay,
  disableCloseOnPointDown,
  disableOpenOnFocus,
  enableOpenOnFocusVisibleOnly
}: TooltipProps) => {
  triggerRef: _$react.RefObject<HTMLElement | null>;
  containerRef: _$react.RefObject<HTMLDivElement | null>;
  open: boolean;
  handleMouseOver: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
  handleFocus: () => void;
  handleBlur: () => void;
  handleMouseDown: () => void;
  handleClick: (e: MouseEvent<HTMLElement>) => void;
  handleDismiss: () => void;
  handlePointerDownOutside: (e: PointerDownOutsideEvent) => void;
};
//#endregion
export { useTooltip };