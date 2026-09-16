import * as _$react from "react";

//#region src/components/text-area/contexts.d.ts
type TextAreaContextValue = {
  length: number;
};
declare const TextAreaProvider: _$react.FC<TextAreaContextValue & {
    children: React.ReactNode;
  }>, useTextAreaContext: (consumerName: string) => TextAreaContextValue;
//#endregion
export { TextAreaProvider, useTextAreaContext };