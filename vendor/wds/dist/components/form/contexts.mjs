'use client';
import { FORM_FIELD_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/form/contexts.ts
const [FormFieldProvider, useFormFieldContext] = createContext(FORM_FIELD_NAME);
//#endregion
export { FormFieldProvider, useFormFieldContext };
