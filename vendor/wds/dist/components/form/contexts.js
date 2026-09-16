'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_form_constants = require("./constants.js");
//#region src/components/form/contexts.ts
const [FormFieldProvider, useFormFieldContext] = (0, require("@radix-ui/react-context").createContext)(require_components_form_constants.FORM_FIELD_NAME);
//#endregion
exports.FormFieldProvider = FormFieldProvider;
exports.useFormFieldContext = useFormFieldContext;
