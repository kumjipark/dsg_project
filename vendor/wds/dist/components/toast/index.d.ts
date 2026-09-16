import { TypographyProps } from "../typography/types.js";
import { FlexBoxProps } from "../flex-box/types.js";
import { ToastContainerProps, ToastContentProps, ToastIconProps, ToastProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";

//#region src/components/toast/index.d.ts
declare const Toast: PolymorphicComponentInternal<ToastProps, "div">;
declare const ToastContainer: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ToastIcon: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const ToastContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "p">, "ref"> & _$react.RefAttributes<HTMLParagraphElement>>;
//#endregion
export { Toast, ToastContainer, type ToastContainerProps, ToastContent, type ToastContentProps, ToastIcon, type ToastIconProps, type ToastProps };