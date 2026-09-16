import { FlexBoxProps } from "../flex-box/types.js";
import { ListCellContentProps } from "../list/types.js";
import { MenuActionAreaContentProps, MenuActionAreaProps, MenuContentProps, MenuGroupProps, MenuItemProps, MenuListProps, MenuProps, MenuTriggerProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/menu/index.d.ts
declare const Menu: {
  ({
    defaultValue,
    value: valueProp,
    onValueChange,
    children,
    ...props
  }: MenuProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const MenuTrigger: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const MenuContent: PolymorphicComponentInternal<MenuContentProps, "div">;
declare const MenuList: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "ul">, "ref"> & _$react.RefAttributes<HTMLUListElement>>;
declare const MenuGroup: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<MenuGroupProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const MenuItem: PolymorphicComponentInternal<MenuItemProps, "li">;
declare const MenuItemContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ListCellContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const MenuActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<MenuActionAreaProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const MenuActionAreaContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<MenuActionAreaContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Menu, MenuActionArea, MenuActionAreaContent, type MenuActionAreaContentProps, type MenuActionAreaProps, MenuContent, type MenuContentProps, MenuGroup, type MenuGroupProps, MenuItem, MenuItemContent, type ListCellContentProps as MenuItemContentProps, type MenuItemProps, MenuList, type MenuListProps, type MenuProps, MenuTrigger, type MenuTriggerProps };