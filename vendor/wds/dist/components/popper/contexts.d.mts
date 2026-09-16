import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";
import { Side } from "@floating-ui/react";

//#region src/components/popper/contexts.d.ts
type PopperContextValue = {
  anchor: HTMLElement | null;
  onAnchorChange(anchor: HTMLElement | null): void;
};
declare const PopperProvider: {
    (props: PopperContextValue & {
      scope: string;
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, usePopperContext: (consumerName: string, scope: string) => PopperContextValue;
type PopperContentContextValue = {
  side: Side;
  onArrowChange(arrow: HTMLElement | null): void;
  arrowX?: number;
  arrowY?: number;
};
declare const PopperContentProvider: {
    (props: PopperContentContextValue & {
      scope: string;
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, usePopperContentContext: (consumerName: string, scope: string) => PopperContentContextValue;
//#endregion
export { PopperContentProvider, PopperProvider, usePopperContentContext, usePopperContext };