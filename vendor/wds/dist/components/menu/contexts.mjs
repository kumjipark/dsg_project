'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
import { MENU_ITEM_NAME, MENU_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/menu/contexts.ts
const [MenuProvider, useMenuContext] = createContext(MENU_NAME);
const [MenuItemProvider, useMenuItemContext] = createLooseContext(MENU_ITEM_NAME);
//#endregion
export { MenuItemProvider, MenuProvider, useMenuContext, useMenuItemContext };
