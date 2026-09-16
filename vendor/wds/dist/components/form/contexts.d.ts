import * as _$react from "react";

//#region src/components/form/contexts.d.ts
type FormFieldContextType = {
  id: string;
};
declare const FormFieldProvider: _$react.FC<FormFieldContextType & {
    children: React.ReactNode;
  }>, useFormFieldContext: (consumerName: string) => FormFieldContextType;
//#endregion
export { FormFieldProvider, useFormFieldContext };