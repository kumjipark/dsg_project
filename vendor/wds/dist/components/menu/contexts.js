'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_hooks_internal_use_loose_context = require("../../hooks/internal/use-loose-context.js");
const require_components_menu_constants = require("./constants.js");
//#region src/components/menu/contexts.ts
const [MenuProvider, useMenuContext] = (0, require("@radix-ui/react-context").createContext)(require_components_menu_constants.MENU_NAME);
const [MenuItemProvider, useMenuItemContext] = require_hooks_internal_use_loose_context.default(require_components_menu_constants.MENU_ITEM_NAME);
//#endregion
exports.MenuItemProvider = MenuItemProvider;
exports.MenuProvider = MenuProvider;
exports.useMenuContext = useMenuContext;
exports.useMenuItemContext = useMenuItemContext;
