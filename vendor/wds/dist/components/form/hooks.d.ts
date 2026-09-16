//#region src/components/form/hooks.d.ts
declare const useFormField: (componentName: string) => {
  id: string;
  formLabelId: string;
  formFieldId: string;
  formMessageId: string;
  formErrorMessageId: string;
};
//#endregion
export { useFormField };