import { ReactNode } from "react";

//#region src/components/force-theme/types.d.ts
type ForceThemeProps = {
  theme: 'light' | 'dark';
  children?: ReactNode;
};
//#endregion
export { ForceThemeProps };