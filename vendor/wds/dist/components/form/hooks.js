'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_components_form_contexts = require("./contexts.js");
//#region src/components/form/hooks.ts
const useFormField = (componentName) => {
	const { id } = require_components_form_contexts.useFormFieldContext(componentName);
	return {
		id,
		formLabelId: `${id}-form-label`,
		formFieldId: `${id}-form-field`,
		formMessageId: `${id}-form-field-message`,
		formErrorMessageId: `${id}-form-field-error-message`
	};
};
//#endregion
exports.useFormField = useFormField;
