import { FlexBoxProps } from "../flex-box/types.js";
import { SectionHeaderNavigationButtonProps, SectionHeaderNavigationProps, SectionHeaderProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/section-header/index.d.ts
declare const SectionHeader: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SectionHeaderProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const SectionHeaderNavigation: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const SectionHeaderNavigationButton: PolymorphicComponentInternal<SectionHeaderNavigationButtonProps, "button">;
//#endregion
export { SectionHeader, SectionHeaderNavigation, SectionHeaderNavigationButton, type SectionHeaderNavigationButtonProps, type SectionHeaderNavigationProps, type SectionHeaderProps };