import { TopNavigationButtonProps, TopNavigationProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/top-navigation/index.d.ts
declare const TopNavigation: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TopNavigationProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const TopNavigationButton: PolymorphicComponentInternal<TopNavigationButtonProps, "button">;
//#endregion
export { TopNavigation, TopNavigationButton, type TopNavigationButtonProps, type TopNavigationProps };