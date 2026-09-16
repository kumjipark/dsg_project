'use client';
import { useFormFieldContext } from "./contexts.mjs";
//#region src/components/form/hooks.ts
const useFormField = (componentName) => {
	const { id } = useFormFieldContext(componentName);
	return {
		id,
		formLabelId: `${id}-form-label`,
		formFieldId: `${id}-form-field`,
		formMessageId: `${id}-form-field-message`,
		formErrorMessageId: `${id}-form-field-error-message`
	};
};
//#endregion
export { useFormField };
