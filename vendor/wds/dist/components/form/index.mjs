'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { Label } from "../label/index.mjs";
import { FORM_CONTROL_NAME, FORM_ERROR_MESSAGE_NAME, FORM_FIELD_NAME, FORM_LABEL_NAME, FORM_MESSAGE_NAME } from "./constants.mjs";
import { FormFieldProvider } from "./contexts.mjs";
import { useFormField } from "./hooks.mjs";
import { forwardRef, useId } from "react";
import { Slot } from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
//#region src/components/form/index.tsx
const FormField = forwardRef(({ as, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FormFieldProvider, {
		id: useId(),
		children: /* @__PURE__ */ jsx(FlexBox, {
			as: as || "div",
			ref,
			flexDirection: "column",
			gap: "8px",
			...props
		})
	});
});
FormField.displayName = FORM_FIELD_NAME;
const FormLabel = forwardRef((props, ref) => {
	const { formFieldId, formLabelId } = useFormField(FORM_LABEL_NAME);
	return /* @__PURE__ */ jsx(Label, {
		ref,
		id: formLabelId,
		htmlFor: formFieldId,
		...props
	});
});
FormLabel.displayName = FORM_LABEL_NAME;
const FormControl = forwardRef((props, ref) => {
	const { formFieldId, formLabelId, formMessageId, formErrorMessageId } = useFormField(FORM_CONTROL_NAME);
	return /* @__PURE__ */ jsx(Slot, {
		ref,
		id: formFieldId,
		"aria-describedby": `${formMessageId} ${formErrorMessageId}`,
		"aria-labelledby": formLabelId,
		...props
	});
});
FormControl.displayName = FORM_CONTROL_NAME;
const FormMessage = forwardRef(({ as, children, ...props }, ref) => {
	const { formMessageId } = useFormField(FORM_MESSAGE_NAME);
	if (!children) return null;
	return /* @__PURE__ */ jsx(Typography, {
		as: as || "p",
		ref,
		id: formMessageId,
		variant: "label2",
		weight: "regular",
		color: "semantic.label.alternative",
		...props,
		children
	});
});
FormMessage.displayName = FORM_MESSAGE_NAME;
const FormErrorMessage = forwardRef(({ as, children, ...props }, ref) => {
	const { formErrorMessageId } = useFormField(FORM_ERROR_MESSAGE_NAME);
	if (!children) return null;
	return /* @__PURE__ */ jsx(Typography, {
		as: as || "p",
		ref,
		id: formErrorMessageId,
		variant: "label2",
		weight: "regular",
		color: "semantic.status.negative",
		...props,
		children
	});
});
FormErrorMessage.displayName = FORM_ERROR_MESSAGE_NAME;
//#endregion
export { FormControl, FormErrorMessage, FormField, FormLabel, FormMessage };
