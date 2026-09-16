import { MenuDefaultProps } from "./types.js";
import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/menu/contexts.d.ts
type MenuContextType = {
  value: MenuDefaultProps['value'];
  onValueChange: (value: MenuDefaultProps['value']) => void;
};
declare const MenuProvider: _$react.FC<MenuContextType & {
    children: React.ReactNode;
  }>, useMenuContext: (consumerName: string) => MenuContextType;
type MenuItemContextType = {
  selected?: boolean;
};
declare const MenuItemProvider: {
    (props: MenuItemContextType & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useMenuItemContext: () => MenuItemContextType | undefined;
//#endregion
export { MenuItemProvider, MenuProvider, useMenuContext, useMenuItemContext };