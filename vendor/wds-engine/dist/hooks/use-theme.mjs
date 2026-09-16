'use client';
import ThemeContext from "../context/index.mjs";
import { useContext } from "react";
//#region src/hooks/use-theme.ts
const useTheme = () => useContext(ThemeContext);
//#endregion
export { useTheme as default };
