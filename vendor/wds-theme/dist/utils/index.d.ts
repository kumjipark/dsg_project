import { Theme, ThemeColorsToken } from "../types/index.js";

//#region src/utils/index.d.ts
declare const getColorByToken: (theme: Theme, token: ThemeColorsToken) => string;
declare const addHexOpacity: (hex: string, value: number) => string;
//#endregion
export { addHexOpacity, getColorByToken };