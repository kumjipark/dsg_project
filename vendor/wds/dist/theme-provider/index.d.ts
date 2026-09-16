import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { ThemeProvider as ThemeProvider$1 } from "@wanteddev/wds-engine";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/theme-provider/index.d.ts
type Props = PropsWithChildren<{
  enableDarkMode?: boolean; /** Disable all CSS transitions when switching themes */
  disableTransitionOnChange?: boolean | undefined; /** Key used to store theme setting in localStorage */
  storageKey?: string | undefined; /** Use default global style */
  disableDefaultGlobalStyle?: boolean | undefined;
}> & Pick<ComponentPropsWithoutRef<typeof ThemeProvider$1>, 'provider'>;
declare const ThemeProvider: ({
  children,
  enableDarkMode,
  disableTransitionOnChange,
  storageKey,
  disableDefaultGlobalStyle,
  provider
}: Props) => _$react_jsx_runtime0.JSX.Element;
//#endregion
export { ThemeProvider as default };