import { ChipProps } from "./types.js";
import * as _$react from "react";
import { ThemeColorsToken } from "@wanteddev/wds-engine";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/chip/contexts.d.ts
type ChipContextValue = { [key in NonNullable<ChipProps['variant']>]?: ThemeColorsToken };
/**
 * Used to easily override the default color value of the chip action.
 */
declare const ChipProvider: {
    (props: ChipContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useChipContext: () => ChipContextValue | undefined;
//#endregion
export { ChipProvider, useChipContext };