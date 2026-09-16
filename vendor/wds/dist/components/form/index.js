'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_label_index = require("../label/index.js");
const require_components_form_constants = require("./constants.js");
const require_components_form_contexts = require("./contexts.js");
const require_components_form_hooks = require("./hooks.js");
let react = require("react");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/form/index.tsx
const FormField = (0, react.forwardRef)(({ as, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_form_contexts.FormFieldProvider, {
		id: (0, react.useId)(),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			as: as || "div",
			ref,
			flexDirection: "column",
			gap: "8px",
			...props
		})
	});
});
FormField.displayName = require_components_form_constants.FORM_FIELD_NAME;
const FormLabel = (0, react.forwardRef)((props, ref) => {
	const { formFieldId, formLabelId } = require_components_form_hooks.useFormField(require_components_form_constants.FORM_LABEL_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_label_index.Label, {
		ref,
		id: formLabelId,
		htmlFor: formFieldId,
		...props
	});
});
FormLabel.displayName = require_components_form_constants.FORM_LABEL_NAME;
const FormControl = (0, react.forwardRef)((props, ref) => {
	const { formFieldId, formLabelId, formMessageId, formErrorMessageId } = require_components_form_hooks.useFormField(require_components_form_constants.FORM_CONTROL_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref,
		id: formFieldId,
		"aria-describedby": `${formMessageId} ${formErrorMessageId}`,
		"aria-labelledby": formLabelId,
		...props
	});
});
FormControl.displayName = require_components_form_constants.FORM_CONTROL_NAME;
const FormMessage = (0, react.forwardRef)(({ as, children, ...props }, ref) => {
	const { formMessageId } = require_components_form_hooks.useFormField(require_components_form_constants.FORM_MESSAGE_NAME);
	if (!children) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
FormMessage.displayName = require_components_form_constants.FORM_MESSAGE_NAME;
const FormErrorMessage = (0, react.forwardRef)(({ as, children, ...props }, ref) => {
	const { formErrorMessageId } = require_components_form_hooks.useFormField(require_components_form_constants.FORM_ERROR_MESSAGE_NAME);
	if (!children) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
FormErrorMessage.displayName = require_components_form_constants.FORM_ERROR_MESSAGE_NAME;
//#endregion
exports.FormControl = FormControl;
exports.FormErrorMessage = FormErrorMessage;
exports.FormField = FormField;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
