import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/checkbox/contexts.d.ts
type CheckboxContextValue = {
  tight: boolean;
};
/**
 * Used to easily override the default tight value of the checkbox.
 */
declare const CheckboxProvider: {
    (props: CheckboxContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useCheckboxContext: () => CheckboxContextValue | undefined;
//#endregion
export { CheckboxProvider, useCheckboxContext };