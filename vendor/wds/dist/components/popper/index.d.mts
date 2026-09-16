import { PopperAnchorProps, PopperArrowProps, PopperContentProps, PopperProps } from "./types.mjs";
import { ScopedProps } from "../../hooks/internal/use-scope-context.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/popper/index.d.ts
declare const Popper: {
  ({
    children,
    __scopePopper
  }: ScopedProps<PopperProps, "Popper">): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const PopperAnchor: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ScopedProps<PopperAnchorProps, "Popper">, "div">, "ref"> & _$react.RefAttributes<HTMLElement>>;
declare const PopperArrow: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ScopedProps<PopperArrowProps, "Popper">, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const PopperContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ScopedProps<PopperContentProps, "Popper">, "div">, "ref"> & _$react.RefAttributes<HTMLElement>>;
//#endregion
export { Popper, PopperAnchor, type PopperAnchorProps, PopperArrow, type PopperArrowProps, PopperContent, type PopperContentProps, type PopperProps };