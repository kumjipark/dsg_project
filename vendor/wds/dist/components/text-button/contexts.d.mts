import { TextButtonColor } from "./types.mjs";
import { ThemeColorsToken } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/text-button/contexts.d.ts
type TextButtonContextValue = { [key in TextButtonColor]?: ThemeColorsToken };
/**
 * Used to easily override the default color value of the text button.
 */
declare const TextButtonProvider: {
    (props: TextButtonContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useTextButtonContext: () => TextButtonContextValue | undefined;
//#endregion
export { TextButtonProvider, useTextButtonContext };