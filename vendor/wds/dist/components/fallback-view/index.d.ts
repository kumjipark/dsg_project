import { FlexBoxProps } from "../flex-box/types.js";
import { FallbackViewButtonProps, FallbackViewContentProps, FallbackViewImageProps, FallbackViewProps, FallbackViewTextProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/fallback-view/index.d.ts
declare const FallbackView: PolymorphicComponentInternal<FallbackViewProps, "div">;
declare const FallbackViewImage: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const FallbackViewContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const FallbackViewText: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FallbackViewTextProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const FallbackViewButton: PolymorphicComponentInternal<FallbackViewButtonProps, "button">;
//#endregion
export { FallbackView, FallbackViewButton, type FallbackViewButtonProps, FallbackViewContent, type FallbackViewContentProps, FallbackViewImage, type FallbackViewImageProps, type FallbackViewProps, FallbackViewText, type FallbackViewTextProps };