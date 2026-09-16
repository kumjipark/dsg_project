'use client';
import { theme } from "@wanteddev/wds-theme";
import { createContext } from "react";
//#region src/context/index.ts
const ThemeContext = createContext(theme.light);
if (process.env.NODE_ENV !== "production") ThemeContext.displayName = "ThemeContext";
//#endregion
export { ThemeContext as default };
