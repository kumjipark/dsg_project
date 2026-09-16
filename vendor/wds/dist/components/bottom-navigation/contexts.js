'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_bottom_navigation_constants = require("./constants.js");
//#region src/components/bottom-navigation/contexts.ts
const [BottomNavigationProvider, useBottomNavigationContext] = (0, require("@radix-ui/react-context").createContext)(require_components_bottom_navigation_constants.BOTTOM_NAVIGATION_NAME);
//#endregion
exports.BottomNavigationProvider = BottomNavigationProvider;
exports.useBottomNavigationContext = useBottomNavigationContext;
