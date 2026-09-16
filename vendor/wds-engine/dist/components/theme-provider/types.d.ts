import { JSX, ReactNode } from "react";
import { Theme } from "@wanteddev/wds-theme";

//#region src/components/theme-provider/types.d.ts
type ThemeProviderProps = {
  theme?: 'light' | 'dark';
  children: ReactNode;
  provider?: (props: {
    theme: Theme;
    children: ReactNode;
  }) => JSX.Element;
};
//#endregion
export { ThemeProviderProps };