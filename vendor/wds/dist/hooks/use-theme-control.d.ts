import { Dispatch, SetStateAction } from "react";

//#region src/hooks/use-theme-control.d.ts
declare const useThemeControl: () => {
  theme: 'light' | 'dark';
  themeOriginValue: 'light' | 'dark' | 'system' | undefined;
  setTheme: Dispatch<SetStateAction<string>>;
};
//#endregion
export { useThemeControl as default };