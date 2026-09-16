import { IconButtonVariant } from "./types.mjs";
import { ThemeColorsToken } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/icon-button/contexts.d.ts
type IconButtonContextValue = { [key in IconButtonVariant]?: ThemeColorsToken };
/**
 * Used to easily override the default color value of the icon button.
 */
declare const IconButtonProvider: {
    (props: IconButtonContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useIconButtonContext: () => IconButtonContextValue | undefined;
//#endregion
export { IconButtonProvider, useIconButtonContext };