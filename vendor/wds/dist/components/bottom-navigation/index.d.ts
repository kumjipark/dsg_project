import { BottomNavigationItemProps, BottomNavigationProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/bottom-navigation/index.d.ts
declare const BottomNavigation: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<BottomNavigationProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const BottomNavigationItem: PolymorphicComponentInternal<BottomNavigationItemProps, "button">;
//#endregion
export { BottomNavigation, BottomNavigationItem, type BottomNavigationItemProps, type BottomNavigationProps };