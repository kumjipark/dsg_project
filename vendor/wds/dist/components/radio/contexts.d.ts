import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/radio/contexts.d.ts
type RadioContextValue = {
  tight: boolean;
};
/**
 * Used to easily override the default tight value of the radio.
 */
declare const RadioProvider: {
    (props: RadioContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useRadioContext: () => RadioContextValue | undefined;
//#endregion
export { RadioProvider, useRadioContext };