import * as _$react from "react";

//#region src/components/radio-group/contexts.d.ts
type RadioGroupContextType = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: string;
  onValueChange(value: string): void;
};
declare const RadioGroupProvider: _$react.FC<RadioGroupContextType & {
    children: React.ReactNode;
  }>, useRadioGroupContext: (consumerName: string) => RadioGroupContextType;
//#endregion
export { RadioGroupContextType, RadioGroupProvider, useRadioGroupContext };